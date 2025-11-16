import {Howl, Howler} from "howler";
import {parseChart} from "/src/parseChart.js";
const FPS = 60;
const MS_BETWEEN_FRAMES = (1 / FPS) * 1000;
async function playSong() {

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
      if (chart.SyncTrack[current_tick] && chart.SyncTrack[current_tick].B) {
        bpm = chart.SyncTrack[current_tick].B / 1000;
        seconds_per_tick = 1 / ((bpm / 60) * tick_rate);
        console.log(seconds_per_tick)
      }
      game_time_seconds += seconds_per_tick;
      if (current_tick % tick_rate == 0) {
        console.log("beep",current_tick);
      }
      current_tick++;
    }
  },MS_BETWEEN_FRAMES)
  sound.on("end", () => {
    clearInterval(interval_id);
  })
  
  // let sleep_time;
  // for (let i = 0; i < 90000; i++) { // also hardcoded
  //   if (chart.SyncTrack[i]) {
  //     if (chart.SyncTrack[i].B) {
  //       bpm = chart.SyncTrack[i].B / 1000;
  //     }
  //   }
  //   sleep_time = 1 / (tick_rate * bpm / 60) * 1000;
  //   if ((i % tick_rate == 0) || i == 0) {
  //     console.log("tick"+String(i));
  //   }
  //   await sleep(sleep_time);
    

  // }
}
let button = document.getElementById("play");
button.addEventListener("click",playSong)
