import {Howl, Howler} from "howler";
import {parseChart} from "/src/parseChart.js";

async function playSong() {
  let chart = await parseChart("songs/Paper Machete/notes.chart");
  let sound = new Howl({
    src: ["songs/Paper Machete/guitar.opus"],
    html5: true,
  });
  sound.play();
}

let button = document.getElementById("play");
button.addEventListener("click",playSong)
