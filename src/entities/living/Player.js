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

    scene.add.existing(this);
  }

  eat() {
    this.total++;
  }
}

export default Player;