import { GameObjects } from "phaser";

let livingCount = 0;

class Living extends GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x * 16, y * 16, "lolwhat");

    this.id = ++livingCount;
    this.name = `LivingCreature${this.id}`;

    this.setOrigin(0);

    this.health = 100;
    this.maxHealth = 100;
    this.energy = 0;
    this.maxEnergy = 0;
    this.total = 0;

    scene.add.existing(this);
  }

  eat() {
    this.total++;
  }
}

export default Living;
