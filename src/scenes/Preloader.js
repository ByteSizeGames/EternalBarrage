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
    this.load.image("BoundCadaver", "mobs/undead/BoundCadaver.png");
    this.load.image("BrittleArcher", "mobs/undead/BrittleArcher.png");
    this.load.image("CarcassFeeder", "mobs/undead/CarcassFeeder.png");
    this.load.image("DecrepitBones", "mobs/undead/DecrepitBones.png");
    this.load.image("DismemberedCrawler", "mobs/undead/DismemberedCrawler.png");
    this.load.image("GhastlyEye", "mobs/undead/GhastlyEye.pvvvng");
    this.load.image("GiantRoyalScarab", "mobs/undead/GiantRoyalScarab.png");
    this.load.image("GraveRevenant", "mobs/undead/GraveRevenant.png");
    this.load.image("MutilatedStumbler", "mobs/undead/MutilatedStumbler.png");
    this.load.image("RoyalScarab", "mobs/undead/RoyalScarab.png");
    this.load.image("SandGhoul", "mobs/undead/SandGhoul.png");
    this.load.image("SkitteringHand", "mobs/undead/SkitteringHand.png");
    this.load.image("ToxicHound", "mobs/undead/ToxicHound.png");
    this.load.image("undead_1", "mobs/undead/undead_1.png");
    this.load.image("UnravelingCrawler", "mobs/undead/UnravelingCrawler.png");
    this.load.image("VampireBat", "mobs/undead/VampireBat.png");

    // Magical Mobs
    this.load.image("AdeptNecromancer", "mobs/magic/AdeptNecromancer.png");
    this.load.image("CorruptedTreant", "mobs/magic/CorruptedTreant.png");
    this.load.image("DeftSorceress", "mobs/magic/DeftSorceress.png");
    this.load.image("EarthElemental", "mobs/magic/EarthElemental.png");
    this.load.image("ExpertDruid", "mobs/magic/ExpertDruid.png");
    this.load.image("FireElemental", "mobs/magic/FireElemental.png");
    this.load.image("FlutteringPixie", "mobs/magic/FlutteringPixie.png");
    this.load.image("GlowingWisp", "mobs/magic/GlowingWisp.png");
    this.load.image("GrizzledTreant", "mobs/magic/GrizzledTreant.png");
    this.load.image("IceGolem", "mobs/magic/IceGolem.png");
    this.load.image("IronGolem", "mobs/magic/IronGolem.png");
    this.load.image("magical_1", "mobs/magic/magical_1.png");
    this.load.image("MagicalFairy", "mobs/magic/MagicalFairy.png");
    this.load.image("NovicePyromancer", "mobs/magic/NovicePyromancer.png");
    this.load.image("VileWitch", "mobs/magic/VileWitch.png");
    this.load.image("WaterElemental", "mobs/magic/WaterElemental.png");

    // Humanoid Mobs
    this.load.image("BestialLizardfolkIdleSide", "mobs/humanoid/BestialLizardfolkIdleSide.png");
    this.load.image("GoblinArcher", "mobs/humanoid/GoblinArcher.png");
    this.load.image("GoblinFanatic", "mobs/humanoid/GoblinFanatic.png");
    this.load.image("GoblinFighter", "mobs/humanoid/GoblinFighter.png");
    this.load.image("GoblinOccultist", "mobs/humanoid/GoblinOccultist.png");
    this.load.image("GoblinWolfRider", "mobs/humanoid/GoblinWolfRider.png");
    this.load.image("HalflingAssassin", "mobs/humanoid/HalflingAssassin.png");
    this.load.image("HalflingBard", "mobs/humanoid/HalflingBard.png");
    this.load.image("HalflingRanger", "mobs/humanoid/HalflingRanger.png");
    this.load.image("HalflingRogue", "mobs/humanoid/HalflingRogue.png");
    this.load.image("HalflingSlinger", "mobs/humanoid/HalflingSlinger.png");
    this.load.image("humanoid_1", "mobs/humanoid/humanoid_1.png");
    this.load.image("LizardfolkArcher", "mobs/humanoid/LizardfolkArcher.png");
    this.load.image("LizardfolkGladiator", "mobs/humanoid/LizardfolkGladiator.png");
    this.load.image("LizardfolkScout", "mobs/humanoid/LizardfolkScout.png");
    this.load.image("LizardfolkSpearman", "mobs/humanoid/LizardfolkSpearman.png");

    // Dragon Mobs
    this.load.image("AdultGreenDragon", "mobs/dragons/AdultGreenDragon.png");
    this.load.image("AdultWhiteDragon", "mobs/dragons/AdultWhiteDragon.png");
    this.load.image("AquaDrake", "mobs/dragons/AquaDrake.png");
    this.load.image("BabyBrassDragon", "mobs/dragons/BabyBrassDragon.png");
    this.load.image("BabyCopperDragon", "mobs/dragons/BabyCopperDragon.png");
    this.load.image("BabyGreenDragon", "mobs/dragons/BabyGreenDragon.png");
    this.load.image("BabyWhiteDragon", "mobs/dragons/BabyWhiteDragon.png");
    this.load.image("dragons_1", "mobs/dragons/dragons_1.png");
    this.load.image("JuvenileBronzeDragon", "mobs/dragons/JuvenileBronzeDragon.png");
    this.load.image("MatureBronzeDragon", "mobs/dragons/MatureBronzeDragon.png");
    this.load.image("MudWyvern", "mobs/dragons/MudWyvern.png");
    this.load.image("PoisonDrake", "mobs/dragons/PoisonDrake.png");
    this.load.image("PygmyWyvern", "mobs/dragons/PygmyWyvern.png");
    this.load.image("ViridianDrake", "mobs/dragons/ViridianDrake.png");
    this.load.image("YoungBrassDragon", "mobs/dragons/YoungBrassDragon.png");
    this.load.image("YoungRedDragon", "mobs/dragons/YoungRedDragon.png");

  }

  create() {
    //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
    //  For example, you can define global animations here, so we can use them in other scenes.

    //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
    this.scene.start("Game");
  }
}
