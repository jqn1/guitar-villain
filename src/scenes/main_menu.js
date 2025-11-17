import {Container, Text} from "pixi.js"
import {playSong} from "/src/game.js"

export function create_main_menu(app,game) {
  const main_menu = new Container();
  app.stage.addChild(main_menu);
  const play_button = new Container();
  const play_button_text = new Text({
    text: "Jugar",
    style:{
      fontFamily: "Roboto",
      fill:"#51d1f6"
    }
  });
  play_button_text.anchor.set(0.5);
  play_button_text.x = app.screen.width / 2;
  play_button_text.y = app.screen.height / 2;
  play_button.eventMode = "static";
  play_button.cursor = "pointer";
  play_button.on("pointerdown", () => {
    game.visible = true;
    main_menu.visible = false;
    playSong();
  })
  play_button.addChild(play_button_text);
  main_menu.addChild(play_button);
  return main_menu;
}
