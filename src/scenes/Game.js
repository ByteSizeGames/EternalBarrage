import { Scene } from "phaser";
import Living from "../entities/living/Living";
import Player from "../entities/living/Player";
import Zombie from "../entities/living/Zombie";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  create() {
    this.cameras.main.setBackgroundColor(0x000000);

    const level = [
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 5],
      [0, 6, 6, 6, 6, 6, 6, 6, 6, 5],
      [0, 6, 6, 6, 6, 6, 6, 6, 6, 5],
      [0, 6, 6, 6, 6, 6, 6, 6, 6, 5],
      [0, 6, 6, 6, 6, 6, 6, 6, 6, 5],
      [0, 6, 6, 6, 6, 6, 6, 6, 6, 5],
      [0, 6, 6, 6, 6, 6, 6, 6, 6, 5],
      [0, 6, 6, 6, 6, 6, 6, 6, 6, 5],
      [0, 6, 6, 6, 6, 6, 6, 6, 6, 5],
      [40, 41, 41, 41, 41, 41, 41, 41, 41, 45],
    ];

    const map = this.make.tilemap({
      data: level,
      tileWidth: 16,
      tileHeight: 16,
    });
    const tiles = map.addTilesetImage("dungeon_tiles");
    const layer = map.createLayer(0, tiles, 0, 0);

    this.input.once("pointerdown", () => {
      this.scene.start("GameOver");
    });

    const player = new Player(this, 2, 2);
    const zombie = new Zombie(this, 4, 4);
  }
}
