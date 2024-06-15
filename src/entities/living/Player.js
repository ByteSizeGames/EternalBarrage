import Living from './Living';

class Player extends Living {
  constructor(scene, x, y) {
    super(scene, x, y, "HalflingRanger");

    this.name = `Player${this.id}`;

    this.setOrigin(0);

    this.health = 100;
    this.maxHealth = 100;
    this.energy = 0;
    this.maxEnergy = 0;

    // TODO: FIX MAGIC NUMBER SPEED
    this.speed = 0.032;

    this.attackSpeed = 0.1;

    this.play('player_idle');
  }

  update(time, delta) {
    super.update(time, delta);

    if (!this.isAlive()) {
      console.log("Player died.");
      return;
    }

    // TODO: This is bad, the API should be used instead (velocity, etc)
    // https://stackoverflow.com/a/66355900/503508

    this.x += this.xModifier * this.speed * delta;
    this.y += this.yModifier * this.speed * delta;
  }
}

export default Player;