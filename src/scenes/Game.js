import WFC from "blazinwfc";
import { Scene } from "phaser";
import { simpleDefinition } from "../components/definition";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  create() {
    this.cameras.main.setBackgroundColor(0x000000);

    const wfc = new WFC(simpleDefinition);
    const level = wfc.collapse(30);

    const map = this.make.tilemap({
      data: level,
      tileWidth: 24,
      tileHeight: 24,
    });
    const tiles = map.addTilesetImage("simple_tiles");
    const layer = map.createLayer(0, tiles, 0, 0);

    this.input.once("pointerdown", () => {
      this.scene.start("GameOver");
    });
  }
}
