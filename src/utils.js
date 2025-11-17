import { Application, Assets, Container, Sprite, Text, Rectangle, Texture } from "pixi.js";

export async function sprite_from_all_sprite_image(all_sprite_image_path,x,y,width,height) {
  const full_image = await Assets.load(all_sprite_image_path);
  const frame = new Rectangle(x,y,width,height);

  const cropped_texture = new Texture({
    source: full_image,
    frame,
  })
  const sprite = new Sprite(cropped_texture);
  return sprite;
  
}

export async function texture_from_all_sprite_image(all_sprite_image_path,x,y,width,height) {
  const full_image = await Assets.load(all_sprite_image_path);
  const frame = new Rectangle(x,y,width,height);

  const cropped_texture = new Texture({
    source: full_image,
    frame,
  })
  
  return cropped_texture;
  
}
