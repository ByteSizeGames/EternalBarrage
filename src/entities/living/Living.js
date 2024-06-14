import { Math } from 'phaser';

let livingCount = 0

let Living = Phaser.Class({

    Extends: Phaser.GameObjects.Sprite,

    initialize: function Living(scene, x, y) {
        Phaser.GameObjects.Sprite.call(this, scene)

        this.id = ++livingCount;
        this.name = `LivingCreature${this.id}`;

        this.setTexture('lolwhat');
        this.setPosition(x * 16, y * 16);
        this.setOrigin(0);

        this.health = 100;
        this.maxHealth = 100;
        this.energy = 0;
        this.maxEnergy = 0;

        scene.children.add(this);
    },

    eat: function () {
        this.total++;
    }

});

export default Living;