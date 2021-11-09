//   // Hellish Resistance: You have resistance to fire damage

class Tiefling extends Race {
  constructor() {
    super(17, 110, 5.5, 175);
    super.incrementAbilityScore(AbilityScore.CHARISMA, 2);
    super.setAlignment(Alignment.CHAOTIC_EVIL);
    super.addLanguage([Language.INFERNAL]);
    this.hasDarkvision = true;
  }

  static incrementAbilityScore(abilityToIncrement, amountToIncrementBy) {
    super.incrementAbilityScore(abilityToIncrement, amountToIncrementBy);
  }
}

class Asmodeus extends Tiefling {
  constructor() {
    super();
    super.incrementAbilityScore(AbilityScore.INTELLIGENCE, 1);
  }
  // Infernal Legacy: You know the thaumaturgy cantrip.
    // Once you reach 3rd leve, you can cast the hellish rebuke spell once per day as a 2nd level spell
    // 5th Level you can also cast the darkness spell once per day.
    // Charisma is your spellcasting ability for these spells
}

class Baalzebul extends Tiefling {
  constructor() {
    super();
    super.incrementAbilityScore(AbilityScore.INTELLIGENCE, 1);
  }
  // Legacy of Maladomini: You know the thaumaturgy cantrip
    // 3rd level you can cast the ray of sickness spell as a 2nd level spell once with this trait
    // regain the ability to do so when you finish a long rest
    // 5th level you can cast the crown of madness spell once with this trait
    // regain the ability to do so when you finish a long rest.
    // Charisma is your spell casting ability for these spells
}

class Dispater extends Tiefling {
  constructor() {
    super();
    super.incrementAbilityScore(AbilityScore.DEXTERITY, 1);
  }
  // Legacy of Dis: You know the thaumaturgy cantrip.
    // 3rd level you can cast the disguise self spell once with this trait
    // regain the ability to do so when you finish a long rest
    // 5th level you can cast the detect thoughts spell once with this trait
    // regain the ability to do so when you finish a long rest
    // Charisma is your spellcasting ability for these spells
}

class Fierna extends Tiefling {
  constructor() {
    super();
    super.incrementAbilityScore(AbilityScore.WISDOM, 1);
  }
  // Legacy of Phlegethos: You know the friends cantrip
    // 3rd level you can cast the charm person spell as a 2nd level spell once with this trait
    // regain the ability to do so when you finish a long rest.
    // 5th level you can cast the suggestion spell once with this trait
    // regain the ability to do so when you finish a long rest
    // Charisma is your spellcasting ability for these spells
}

class Glasya extends Tiefling {
  constructor() {
    super();
    super.incrementAbilityScore(AbilityScore.DEXTERITY, 1);
  }
  // Legacy of Malbolge: You know the minor illusion cantrip
    // 3rd level you can cast the disguise self spell once with this trait
    // regain the ability to do so when you finish a long rest
    // 5th level you can cast the invisibility spell once with this trait
    // regain the ability to do so when you finish a long rest
    // charisma is your spellcasting ability for these spells
}

class Levistus extends Tiefling {
  constructor() {
    super();
    super.incrementAbilityScore(AbilityScore.CONSTITUTION, 1);
  }
  // Legacy of Stygia: You know the ray of frost cantrip.
    // 3rd level you can cast the armor of Agathys spell as a 2nd level spell once with this trait
    // regain the ability to do so when you finish a long rest
    // 5th level: you can cast the darkness spell once with this trait
    // regain the ability to do so when you finish a long rest
    // Charisma is your spellcasting ability for these spells
}

class Mammon extends Tiefling {
  constructor() {
    super();
    super.incrementAbilityScore(AbilityScore.INTELLIGENCE, 1);
  }
  // Legacy of Minauros: You know the mage hand cantrip
    // 3rd level you can cast the tenser's floating disk spell once with this trait
    // regain the ability to do so when you finish a short or long rest.
    // 5th level, you can cast the arcane lock spell once with this trait, requiring no material component
    // regain the ability to do so when you finish a long rest
    // Charisma is your spellcasting ability for these spells
}

class Mephistopheles extends Tiefling {
  constructor() {
    super();
    super.incrementAbilityScore(AbilityScore.INTELLIGENCE, 1);
  }
  // Legacy of Cania: You know the mage hand cantrip
    // 3rd level you can cast the burning hands spell as a 2nd level spell once with this trait
    // regain the ability to do so when you finish a long rest.
    // 5th level, you can cast the flame blade spell once with this trait
    // regain the ability to do so when you finish a long rest
    // charisma is your spellcasting ability for these spells
}

class Zariel extends Tiefling {
  constructor() {
    super();
    super.incrementAbilityScore(AbilityScore.STRENGTH, 1);
  }
  // Legacy of Avernus: You know the thaumaturgy cantrip
    // 3rd level you can cast the searing smite spell as a 2nd level spell once with this trait
    // regain the ability to do so when you finish a long rest
    // 5th level you can cast the branding smite spell once with this trait
    // regain the ability to do so when you finish a long rest
    // charisma is your spellcasting ability for these spells
}