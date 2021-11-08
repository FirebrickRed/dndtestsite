  // Gnome Cunning: you have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic

class Gnome extends Race {
  constructor(matureAge, oldAge, averageHeight, averageWeight) {
    super(matureAge, oldAge, averageHeight, averageWeight);
    super.incrementAbilityScore(AbilityScore.INTELLIGENCE, 2);
    super.setAlignment(Alignment.LAWFUL_GOOD);
    super.setSize(Size.SMALL);
    super.setSpeed(25);
    this.hasDarkvision = true;
    super.addLanguage([Language.GNOMISH]);
  }

  static incrementAbilityScore(abilityToIncrement, amountToIncrementBy) {
    super.incrementAbilityScore(abilityToIncrement, amountToIncrementBy);
  }

  static setAlignment(newAlignment) {
    super.setAlignment(newAlignment);
  }

  static addLanguage(languageToAdd) {
    super.addLanguage(languageToAdd);
  }
}

class ForestGnome extends Gnome {
  constructor() {
    super(40, 500, 3.5, 40);
    super.incrementAbilityScore(AbilityScore.DEXTERITY, 1);
  }
  // Natural Illusionist: You know the minor illusion cantrip. Intelligence is your spellcasting ability for it
  // Speak with Small Beasts: Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts. Forest gnomes love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets.
}

class RockGnome extends Gnome {
  constructor() {
    super(40, 500, 3.5, 40);
    super.incrementAbilityScore(AbilityScore.CONSTITUTION, 1);
  }
  // Artificer's Lore: Whenever you make an Intelligence(History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.
  // Tinker: You have proficiency with artisan's tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time.
    // When you create a device, choose one of the following options:
    // Clockwork Toy: This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.
    // Fire Starter: The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.
    // Music Box: When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed
}

class DeepGnome extends Gnome {
  constructor() {
    super(25, 225, 3.5, 100);
    super.incrementAbilityScore(AbilityScore.DEXTERITY, 1);
    super.setAlignment(Alignment.NEUTRAL);
    this.hasSuperiorDarkvision = true;
    super.addLanguage([Language.UNDERCOMMON]);
  }
  // Stone Camouflage: You have advantage on Dexterity(stealth) checks to hide in rocky terrain.

  // optional feat:
    // Svirfneblin Magic: you have inherited the innate spellcasting ability of your ancestors. this ability allows you to cast nondetection on yourself at will, without needing a material component. You can also cast each of the following spells once with this ability: blindness/deafness, blur, and disguise self. You regain the ability to cast these spells when you finish a long rest. Intellegence is your spellcasting ability for these spells.
}