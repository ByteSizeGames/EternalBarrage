import { Scene } from "phaser";

export class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  init() {
    //  We loaded this image in our Boot Scene, so we can display it here
    this.add.image(512, 384, "background");

    //  A simple progress bar. This is the outline of the bar.
    this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);

    //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
    const bar = this.add.rectangle(512 - 230, 384, 4, 28, 0xffffff);

    //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
    this.load.on("progress", (progress) => {
      //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
      bar.width = 4 + 460 * progress;
    });
  }

  preload() {
    //  Load the assets for the game - Replace with your own assets
    this.load.setPath("assets");

    this.load.image("logo", "logo.jpg");

    this.load.image("dungeon_tiles", "dungeon_tiles.png");
    //this.load.image("simple_tiles", "simpletiles.png");
    //this.load.image("angled_tiles", "angledtiles.png");

    this.preloadMobs();
  }

  preloadMobs() {
    this.load.image("living", "living.png");

    //this.load.image("zombie", "zombie.png");
    //this.load.image("player", "player.png");

    // Undead Mobs
    this.load.spritesheet("BoundCadaver", "mobs/undead/BoundCadaver.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("BrittleArcher", "mobs/undead/BrittleArcher.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("CarcassFeeder", "mobs/undead/CarcassFeeder.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("DecrepitBones", "mobs/undead/DecrepitBones.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("DismemberedCrawler", "mobs/undead/DismemberedCrawler.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("GhastlyEye", "mobs/undead/GhastlyEye.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("GiantRoyalScarab", "mobs/undead/GiantRoyalScarab.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("GraveRevenant", "mobs/undead/GraveRevenant.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("MutilatedStumbler", "mobs/undead/MutilatedStumbler.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("RoyalScarab", "mobs/undead/RoyalScarab.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("SandGhoul", "mobs/undead/SandGhoul.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("SkitteringHand", "mobs/undead/SkitteringHand.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("ToxicHound", "mobs/undead/ToxicHound.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("undead_1", "mobs/undead/undead_1.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("UnravelingCrawler", "mobs/undead/UnravelingCrawler.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("VampireBat", "mobs/undead/VampireBat.png", { frameWidth: 16, frameHeight: 16 });

    // Magical Mobs
    this.load.spritesheet("AdeptNecromancer", "mobs/magic/AdeptNecromancer.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("CorruptedTreant", "mobs/magic/CorruptedTreant.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("DeftSorceress", "mobs/magic/DeftSorceress.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("EarthElemental", "mobs/magic/EarthElemental.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("ExpertDruid", "mobs/magic/ExpertDruid.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("FireElemental", "mobs/magic/FireElemental.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("FlutteringPixie", "mobs/magic/FlutteringPixie.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("GlowingWisp", "mobs/magic/GlowingWisp.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("GrizzledTreant", "mobs/magic/GrizzledTreant.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("IceGolem", "mobs/magic/IceGolem.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("IronGolem", "mobs/magic/IronGolem.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("magical_1", "mobs/magic/magical_1.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("MagicalFairy", "mobs/magic/MagicalFairy.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("NovicePyromancer", "mobs/magic/NovicePyromancer.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("VileWitch", "mobs/magic/VileWitch.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("WaterElemental", "mobs/magic/WaterElemental.png", { frameWidth: 16, frameHeight: 16 });

    // Humanoid Mobs
    this.load.spritesheet("BestialLizardfolkIdleSide", "mobs/humanoid/BestialLizardfolkIdleSide.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("GoblinArcher", "mobs/humanoid/GoblinArcher.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("GoblinFanatic", "mobs/humanoid/GoblinFanatic.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("GoblinFighter", "mobs/humanoid/GoblinFighter.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("GoblinOccultist", "mobs/humanoid/GoblinOccultist.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("GoblinWolfRider", "mobs/humanoid/GoblinWolfRider.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("HalflingAssassin", "mobs/humanoid/HalflingAssassin.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("HalflingBard", "mobs/humanoid/HalflingBard.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("HalflingRanger", "mobs/humanoid/HalflingRanger.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("HalflingRogue", "mobs/humanoid/HalflingRogue.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("HalflingSlinger", "mobs/humanoid/HalflingSlinger.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("humanoid_1", "mobs/humanoid/humanoid_1.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("LizardfolkArcher", "mobs/humanoid/LizardfolkArcher.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("LizardfolkGladiator", "mobs/humanoid/LizardfolkGladiator.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("LizardfolkScout", "mobs/humanoid/LizardfolkScout.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("LizardfolkSpearman", "mobs/humanoid/LizardfolkSpearman.png", { frameWidth: 16, frameHeight: 16 });

    // Dragon Mobs
    this.load.spritesheet("AdultGreenDragon", "mobs/dragons/AdultGreenDragon.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("AdultWhiteDragon", "mobs/dragons/AdultWhiteDragon.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("AquaDrake", "mobs/dragons/AquaDrake.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("BabyBrassDragon", "mobs/dragons/BabyBrassDragon.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("BabyCopperDragon", "mobs/dragons/BabyCopperDragon.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("BabyGreenDragon", "mobs/dragons/BabyGreenDragon.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("BabyWhiteDragon", "mobs/dragons/BabyWhiteDragon.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("dragons_1", "mobs/dragons/dragons_1.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("JuvenileBronzeDragon", "mobs/dragons/JuvenileBronzeDragon.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("MatureBronzeDragon", "mobs/dragons/MatureBronzeDragon.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("MudWyvern", "mobs/dragons/MudWyvern.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("PoisonDrake", "mobs/dragons/PoisonDrake.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("PygmyWyvern", "mobs/dragons/PygmyWyvern.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("ViridianDrake", "mobs/dragons/ViridianDrake.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("YoungBrassDragon", "mobs/dragons/YoungBrassDragon.png", { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet("YoungRedDragon", "mobs/dragons/YoungRedDragon.png", { frameWidth: 16, frameHeight: 16 });

  }

  create() {
    //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
    //  For example, you can define global animations here, so we can use them in other scenes.

    //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
    this.scene.start("Game");
  }
}
