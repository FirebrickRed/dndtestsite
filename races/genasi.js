class Genasi extends Race {
  constructor() {
    super(17, 120, 5.5, 175);
    super.incrementAbilityScore(AbilityScore.CONSTITUTION, 2);
    super.setAlignment(Alignment.NEUTRAL);
    super.addLanguage([Language.PRIMORDIAL]);
  }

  static incrementAbilityScore(abilityToIncrement, amountToIncrementBy) {
    super.incrementAbilityScore(abilityToIncrement, amountToIncrementBy);
  }
}

class AirGenasi extends Genasi {
  constructor() {
    super();
    super.incrementAbilityScore(AbilityScore.DEXTERITY, 1);
  }
  // Unending Breath: You can hold your breath indefinitely while you're not incapacitated.
  // Mingle with the Wind: You can cast the levitate spell once with this trait, requiring no material components, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for this spell.
}

class EarthGenasi extends Genasi {
  constructor() {
    super();
    super.incrementAbilityScore(AbilityScore.STRENGTH, 1);
  }
  // Earth Walk: You can move across difficult terrain made of earth or stone without expending extra movement.
  // Merge with Stone: You can cast the pass without trace spell once with this trait, requiring no material components, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for this spell.
}

class FireGenasi extends Genasi {
  constructor() {
    super();
    super.incrementAbilityScore(AbilityScore.INTELLIGENCE, 1);
    this.hasDarkvision = true;
  }
  // Fire Resistance: You have resistance to fire damage.
  // Reach to the Blaze: You know the produce flame cantrip.
    // 3rd level, you can cast the burning hands spell once with this trait as a 1st level spell
    // you regain the ability to cast it this way when you finish a long rest.
    // Constitution is your spellcasting ability for these spells.
}

class WaterGenasi extends Genasi {
  constructor() {
    super();
    super.incrementAbilityScore(AbilityScore.WISDOM, 1);
    this.swimSpeed = 30;
  }
  // Acid Resistance: You have resistance to acid damage.
  // Amphibious: You can breate air and water.
  // Call to the Wave: You know the shpae water cantrip.
    // 3rd level: you can cast the create or destroy water spell as a 2nd level spell once with this trait
    // You regain the ability to cast it this way when you finish a long rest
    // Constitution is your spellcasting ability for these spells.
}