import {Howl, Howler} from "howler";


function playSong() {
  let sound = new Howl({
    src: ["songs/Paper Machete/guitar.opus"],
    html5: true,
  });
  sound.play();
}

let button = document.getElementById("play");
button.addEventListener("click",playSong)
