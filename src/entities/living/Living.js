import { GameObjects } from "phaser";

let livingCount = 0;
let tileSize = 16;

class Living extends GameObjects.Sprite {

  constructor(scene, x, y, texture) {
    super(scene, x * tileSize, y * tileSize, texture);

    this.id = ++livingCount;
    this.name = `LivingCreature${this.id}`;

    this.setOrigin(0);

    this.xModifier = 0;
    this.yModifier = 0;

    this.health = 100;
    this.maxHealth = 100;
    this.energy = 0;
    this.maxEnergy = 0;

    this.sight = 3;
    // TODO: FIX MAGIC NUMBER SPEED
    this.speed = 0.016;

    this.attackSpeed = 0;

    scene.add.existing(this);

    this.guiText = scene.add.text(this.x, this.y, this.name, { fontSize: '8px', color: '#fff' });
    this.guiHealthUnderlay = scene.add.rectangle(this.x, this.y + this.height, this.width, 2, 0xff0000);
    this.guiHealth = scene.add.rectangle(this.x, this.y + this.height, this.width, 2, 0x00ff00);
  }

  isAlive() {
    return this.health > 0;
  }

  canSee(target) {
    return this.distanceTo(target) <= this.sight;
  }

  distanceTo(target) {
    if (!target) return -1;
    return Math.sqrt(Math.pow(target.x - this.x, 2) + Math.pow(target.y - this.y, 2)) / tileSize;
  }

  update(time, delta) {
    // NOOP - This is a placeholder method that will be overridden by subclasses.
    // console.log(`Living.update() called for ${this.name}.`);

    this.guiText.text = this.name;
    this.guiText.x = this.x + this.width / 2 - this.guiText.width / 2;
    this.guiText.y = this.y - this.guiText.height - 2;

    this.guiHealthUnderlay.x = this.x + this.width / 2;
    this.guiHealthUnderlay.y = this.y + this.height + 2;
    this.guiHealth.x = this.x + this.guiHealthUnderlay.width / 2;
    this.guiHealth.y = this.y + this.height + 2;
    this.guiHealth.width = this.guiHealthUnderlay.width * (this.health / this.maxHealth);
  }
}

export default Living;
