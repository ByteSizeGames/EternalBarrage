import Living from './Living';

class Mobile extends Living {
  target;

  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);

    this.name = `Mobile${this.id}`;
  }

  setTarget(player) {
    this.target = player;
    // this.scene.physics.moveToObject(this, player, this.speed);
  }

  update(time, delta) {
    super.update(time, delta);

    if (this.health <= 0) {
      this.destroy();
      this.guiText.destroy();
      this.guiHealthUnderlay.destroy();
      this.guiHealth.destroy();
    }

    if (this.target) {
      if (this.canSee(this.target)) {
        const dx = this.target.x - this.x;
        const dy = this.target.y - this.y;
        const angle = Math.atan2(dy, dx);
        this.x += (this.speed * Math.cos(angle) * delta);
        this.y += (this.speed * Math.sin(angle) * delta);
      } else {
        this.target = null;
      }
    }
  }
}

export default Mobile;
