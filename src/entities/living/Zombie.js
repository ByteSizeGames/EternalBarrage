import Living from './Living';

class Zombie extends Living {
  constructor(scene, x, y) {
    super(scene, x, y, "MutilatedStumbler");

    this.name = `Zombie${this.id}`;

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

export default Zombie;