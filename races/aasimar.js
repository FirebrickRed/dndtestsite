class Aasimar extends Race {
  constructor() {
    super(17, 160, 5.5, 175);
    super.incrementAbilityScore(AbilityScore.CHARISMA, 2);
    super.setAlignment(Alignment.NEUTRAL_GOOD);
    this.hasDarkvision = true;
    super.addLanguage([Language.CELESTIAL])
  }

  static incrementAbilityScore(abilityToIncrement, amountToIncrementBy) {
    super.incrementAbilityScore(abilityToIncrement, amountToIncrementBy);
  }
  // Celestial Resistance: You have resistance to necrotic damage and radiant damage
  // Healing Hands: As an action, you can touch a creature and cause it to regain a number of hit points equal to your level. Once you use this trait, you can't use it again until you finish a long rest.
  // Light bearer: You know the light cantrip. Charisma is your spellcasting ability for it
}

class ProtectorAasimar extends Aasimar {
  constructor() {
    super();
    this.incrementAbilityScore(AbilityScore.WISDOM, 1);
  }
  // Radiant Soul: starting at 3rd level, you can use your actions to unleash the divine energy within yourself, causing your eyes to glimmer and two luminous, incorporeal wings to sprout from your back. Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you have a flying speed of 30 feet, and once on each of your turns you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra radiant damge equals your level. Oncue you use this trait, you can't use it again until you finish a long rest
}

class ScourgeAasimar extends Aasimar {
  constructor() {
    super();
    super.incrementAbilityScore(AbilityScore.CONSTITUTION, 1);
  }
  // Radiant Consumption: starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing a searing light to radiate from you, pour out of your eyes and maouth, and threaten to char you. Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you shed bright light in a 10 foot radius and dim light for an addition 10 feet, and at the end of each of your turns, you and each creature within 10 feet of you take radiant damage equal to half your level(rounded up). In addition, once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra radiant damage equals your level. Once you use this trait, you can't use it again until you finish a long rest.
}

class FallenAasimar extends Aasimar {
  constructor() {
    super();
    super.incrementAbilityScore(AbilityScore.STRENGTH, 1);
  }
  // Necrotic Shroud: Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing your eyes to turn into pools of darkness and two skeletal, ghostly, flightless wings to sprout from your back. The instant you transform, other creatures within 10 feet of you that can see you must each succeed on a Charisma saving throw(DC 8 + your proficiency bonus + your Charisma modifier) or become frightened of you until the end of your next turn. Your transformation lasts for 1 minute or until you end it as a bonus action. During it, once on each of your turns, you can deal extra necrotic damage to one target when you deal damage to it with an attack or a spell. The extra necrotic equals your level. Once you use this trait, you can't use it again until you finish a long rest.
}