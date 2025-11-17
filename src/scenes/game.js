import {Container, Sprite} from "pixi.js"
import {sprite_from_all_sprite_image,texture_from_all_sprite_image} from "/src/utils.js";
const NOTE_BUTTON_Y = 300;
const NOTE_BUTTON_X_START = 45;
const PATH_TO_ASSETS = "assets/gh.png"

export async function create_game(app) {
  const game = new Container();
  const game_background = await sprite_from_all_sprite_image(PATH_TO_ASSETS,10,10,240,320);
  const note_button_green = await create_note_button("green",PATH_TO_ASSETS,742,416,38,17);
  const note_button_red = await create_note_button("red",PATH_TO_ASSETS,742,437,38,17);
  const note_button_yellow = await create_note_button("yellow",PATH_TO_ASSETS,742,458,38,17);
  const note_button_blue = await create_note_button("blue",PATH_TO_ASSETS,742,416,38,17);
  const note_button_orange = await create_note_button("orange",PATH_TO_ASSETS,742,437,38,17);
  game_background.addChild(note_button_green);
  game_background.addChild(note_button_red);
  game_background.addChild(note_button_yellow);
  game_background.addChild(note_button_blue);
  game_background.addChild(note_button_orange);
  game.addChild(game_background);
  game.visible = false;
  app.stage.addChild(game);
  return game;
}


async function create_note_button(note_number,path_to_asset,x,y,width,height) {
  const texture_normal = await texture_from_all_sprite_image(path_to_asset,x,y,width,height);
  const texture_on_press = await texture_from_all_sprite_image(path_to_asset,x+40,y,width,height);
  let sprite = new Sprite(); 
  sprite.texture = texture_normal; // initally we want the note sprite to be not the onpress texture
  sprite.scale.set(0.75);
  let key;

  if (note_number == "green") { // green
    sprite.x = NOTE_BUTTON_X_START;
    sprite.y = NOTE_BUTTON_Y;
    key = "a";
  }
  else if (note_number == "red") {
    sprite.x = NOTE_BUTTON_X_START + 36;
    sprite.y = NOTE_BUTTON_Y;
    key = "s";
  }
  else if (note_number == "yellow") {
    sprite.x = NOTE_BUTTON_X_START + (36*2);
    sprite.y = NOTE_BUTTON_Y;
    key = "j";
  }
  else if (note_number == "blue") {
    sprite.x = NOTE_BUTTON_X_START + (36*3);
    sprite.y = NOTE_BUTTON_Y;
    sprite.tint = 0x005EFF;
    key = "k";
  }
  else if (note_number == "orange") {
    sprite.x = NOTE_BUTTON_X_START + (36*4);
    sprite.y = NOTE_BUTTON_Y;
    sprite.tint = 0xff4700;
    key = "l";
  }
  sprite.anchor.set(0.5); // the center is the anchor

  window.addEventListener("keydown",(event) => {
    if (event.key.toLowerCase() === key ) {
      sprite.texture = texture_on_press;
    }
  })
  window.addEventListener("keyup",(event) => {
    if (event.key.toLowerCase() === key ) {
      sprite.texture = texture_normal;
    }
  })
  return sprite;

}
