import { GameObjects } from "phaser";

let livingCount = 0;
let tileSize = 16;

class Living extends GameObjects.Sprite {

  constructor(scene, x, y, texture) {
    super(scene, x * tileSize, y * tileSize, texture);

    this.id = ++livingCount;
    this.name = `LivingCreature${this.id}`;

    this.setOrigin(0);

    this.health = 100;
    this.maxHealth = 100;
    this.energy = 0;
    this.maxEnergy = 0;

    this.sight = 3;
    // TODO: The calculations for speed need to be more uniform. Get rid of magic numbers. Decimal was added to fudge movement.
    this.speed = 0.016;

    scene.add.existing(this);
  }

  canSee(target) {
    // Check if this living creature can see the target living creature using pythagorean theorem
    return Math.sqrt(Math.pow(target.x - this.x, 2) + Math.pow(target.y - this.y, 2)) / tileSize <= this.sight;
  }

  update(time, delta) {
    // NOOP - This is a placeholder method that will be overridden by subclasses.
    // console.log(`Living.update() called for ${this.name}.`);
  }
}

export default Living;
