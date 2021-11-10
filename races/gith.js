class Gith extends Race {
  constructor() {
    super(17, 100, 6, 100);
    super.incrementAbilityScore(AbilityScore.INTELLIGENCE, 1);
    super.addLanguage([Language.GITH]);
  }

  static incrementAbilityScore(abilityToIncrement, amountToIncrementBy) {
    super.incrementAbilityScore(abilityToIncrement, amountToIncrementBy);
  }

  static setAlignment(alignmentToBeSetTo) {
    super.setAlignment(alignmentToBeSetTo);
  }
}

class GithYanki extends Gith {
  constructor() {
    super();
    super.incrementAbilityScore(AbilityScore.STRENGTH, 2);
    super.setAlignment(Alignment.LAWFUL_EVIL);
  }
  // Decadent Mastery: You learn one language of your choice, and you are proficient with on skill or tool of your choice.
  // Martial Prodigy: You are proficient with light and medium armor and with shortswords, longswords, and greatswords.
  // Githyanki psionics: You know the mage hand cantrip and the hand is invisible when you cast the cantrip with this trait.
    // 3rd level: you can cast the jump spell once with this trait
    // regain the ability to do so when you finish a long rest
    // 5th levelyou can cast the misty step spell once with this trait
    // regain the ability to do so when you finish a long rest
    // Intelligence is your spellcasting ability for these spells
    // when you cast them with thius trait they don't require components
}

class GithZerai extends Gith {
  constructor() {
    super();
    super.incrementAbilityScore(AbilityScore.WISDOM, 2);
    super.setAlignment(Alignment.LAWFUL_NEUTRAL);
  }
  // Mental Discipline: You have advantage on saving throws against the charmed and frightened conditions. 
  // Githzerai Psionics: You know the mage hand cantrip and the hand is invisible when you cast the cantript with this trait
    // 3rd level you can cast the shield spell once with this trait
    // regain the ability to do so after you finish a long rest
    // 5th level: you can cast the detect thoughts spell once with this trait
    // regain the ability to do so when you finish a long rest
    // wisdom is your spell casting ability for these spells
    // when you cast them with this trait, they don't require components
}