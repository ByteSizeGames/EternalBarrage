import { Scene } from "phaser";
import Player from "../entities/living/Player";
import Zombie from "../entities/living/Zombie";

export class Game extends Scene {
  player;
  mobs = [];

  constructor() {
    super("Game");
  }

  create() {
    this.defineAnimations();

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

    this.inputHandling();

    this.player = new Player(this, 2, 2);

    this.cameras.main
      .setBackgroundColor(0x000000)
      .setZoom(4)
      .setBounds(0, 0, map.widthInPixels, map.heightInPixels)
      .centerToBounds();
    //.startFollow(this.player); ?

    this.mobs.push(new Zombie(this, 7, 4));
    this.mobs.push(new Zombie(this, 8, 1));
    this.mobs.push(new Zombie(this, 6, 6));
  }

  defineAnimations() {
    this.anims.create({
      key: 'zombie_idle',
      frames: this.anims.generateFrameNumbers('MutilatedStumbler', { frames: [0, 1, 2, 3] }),
      frameRate: 8,
      repeat: -1
    });

    this.anims.create({
      key: 'player_idle',
      frames: this.anims.generateFrameNumbers('HalflingRanger', { frames: [0, 1, 2, 3] }),
      frameRate: 8,
      repeat: -1
    });
  }

  inputHandling() {
    this.input.once("pointerdown", () => {
      this.scene.start("GameOver");
    });

    this.keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    this.keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

    this.input.keyboard.on('keydown-W', function () {
      this.player.yModifier = -1;
    }, this);

    this.input.keyboard.on('keyup-W', function () {
      this.player.yModifier = 0;
    }, this);

    this.input.keyboard.on('keydown-S', function () {
      this.player.yModifier = 1;
    }, this);

    this.input.keyboard.on('keyup-S', function () {
      this.player.yModifier = 0;
    }, this);

    this.input.keyboard.on('keydown-A', function () {
      this.player.xModifier = -1;
    }, this);

    this.input.keyboard.on('keyup-A', function () {
      this.player.xModifier = 0;
    }, this);

    this.input.keyboard.on('keydown-D', function () {
      this.player.xModifier = 1;
    }, this);

    this.input.keyboard.on('keyup-D', function () {
      this.player.xModifier = 0;
    }, this);
  }

  update(time, delta) {
    // Check whether player is in range of any mobs
    // If so, attack the player
    this.mobs.forEach((mob) => {
      if (mob.canSee(this.player)) {
        // console.log(`Player is in range of ${mob.name}.`);
        mob.setTarget(this.player);
      }

      if (mob.isAlive() && mob.target && mob.target.isAlive()) {
        const distanceToTarget = mob.distanceTo(mob.target);
        if (distanceToTarget != -1 && distanceToTarget <= 1) {
          mob.target.health -= 1 * delta * mob.attackSpeed;
        }
      }

      if (this.player.isAlive()) {
        const distanceToMob = this.player.distanceTo(mob);
        if (distanceToMob != -1 && distanceToMob <= 1) {
          mob.health -= 1 * delta * this.player.attackSpeed;
        }
      }
    });

    this.player.update(time, delta);
    this.mobs.forEach((mob) => mob.update(time, delta));
  }
}
