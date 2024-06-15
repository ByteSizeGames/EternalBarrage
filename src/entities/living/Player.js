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

    this.play('player_idle');
  }

  update(time, delta) {
    super.update(time, delta)

    // DO STUFF HERE TO MOVE THE PLAYER AROUND THE MAP BASED ON INPUT FROM THE PLAYER (KEYBOARD OR MOUSE) — lol copilot
  }
}

export default Player;