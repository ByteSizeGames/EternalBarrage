import Mobile from './Mobile';

class Zombie extends Mobile {
  constructor(scene, x, y) {
    super(scene, x, y, "MutilatedStumbler");

    this.name = `Zombie${this.id}`;

    this.setOrigin(0);

    this.health = 100;
    this.maxHealth = 100;
    this.energy = 0;
    this.maxEnergy = 0;

    //this.attackSpeed = 0.01;
    this.attackSpeed = Math.random() * 0.05;

    this.play('zombie_idle');
  }

  update(time, delta) {
    super.update(time, delta);
  }
}

export default Zombie;