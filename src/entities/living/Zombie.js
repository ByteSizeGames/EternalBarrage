import Living from './Living';

let Zombie = Phaser.Class({

    Extends: Living,

    initialize: function Zombie(scene, x, y) {
        //Phaser.GameObjects.Image.call(this, scene)

        this.name = `Zombie${this.id}`;

        this.setTexture('lolwhat');
        this.setPosition(x * 16, y * 16);
        this.setOrigin(0);

        this.health = 100;
        this.maxHealth = 100;
        this.energy = 0;
        this.maxEnergy = 0;

        //scene.children.add(this);
    },

    eat: function () {
        this.total++;
    }

});

export default Zombie;