import {Howl, Howler} from "howler";
import {parseChart} from "/src/parseChart.js";
import {create_main_menu} from "/src/scenes/main_menu.js";
import {create_game} from "/src/scenes/game.js";
import { Application, Assets, Container, Sprite, Text, Rectangle, Texture } from "pixi.js";

const FPS = 60;
const MS_BETWEEN_FRAMES = (1 / FPS) * 1000;

export async function playSong() {
  let chart = await parseChart("songs/Paper Machete/notes.chart");
  const tick_rate = 192 // hardcoded
  let sound = new Howl({
    src: ["songs/Paper Machete/guitar.opus"],
    html5: true,
  });
  sound.play();
  let isPlaying = sound.playing();
  let bpm = chart.SyncTrack[0].B / 1000;
  let game_time_seconds = 0;
  let current_tick = 0;
  let seconds_per_tick = 1 / ((bpm / 60) * tick_rate);

  let interval_id = setInterval((
  ) => {
    let song_time_seconds = sound.seek();
    while (game_time_seconds < song_time_seconds) {
      const sync_event = chart.SyncTrack[current_tick];
      if (sync_event &&  sync_event.B) {
        bpm = sync_event.B / 1000;
        seconds_per_tick = 1 / ((bpm / 60) * tick_rate);
      }
      game_time_seconds += seconds_per_tick;
      current_tick++;
    }
  },MS_BETWEEN_FRAMES)
  sound.on("end", () => {
    clearInterval(interval_id);
  })
  
}

(async () => {
  const app = new Application();
  await app.init({ background: '#000000', width: "480", height:"634" });
  document.body.appendChild(app.canvas); // add app to html body

  // create game scene
  const game = await create_game(app);
  game.scale.set(2);

  // create main menu
  const main_menu = create_main_menu(app,game);


  // Listen for animate update
  app.ticker.add((time) => {
    // Continuously rotate the container!
    // * use delta to create frame-independent transform *
  });
})();
