
// most bards learn their language so they can add elvish ballads to their repertoires.
  
  // Keen Senses: you have proficiency in the perception skill
  // Fey Ancestry: You have advantage on saving throws against being charmed, and magic can't put you to sleep
  // Trance: Elves don't need to sleep. Instead they meditate deeply, remaining semiconscious, for 4 hours a day. (The common word for such meditation is "trance.") While meditating, you can dream after a fashion: such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.
class Elf extends Race {
  constructor() {
    super(100, 750, 5.5, 125);
    super.incrementAbilityScore(AbilityScore.DEXTERITY, 2);
    super.setAlignment(Alignment.CHAOTIC_GOOD);
    this.hasDarkvision = true;
    super.addLanguage([Language.ELVISH]);
  }

  static incrementAbilityScore(abilityToIncrement, amountToIncrementBy) {
    super.incrementAbilityScore(abilityToIncrement, amountToIncrementBy);
  }

  static addAnotherLanguage(addThisAmount) {
    super.addAnotherLanguage(addThisAmount);
  }

  static setSpeed(newSpeed) {
    super.setSpeed(newSpeed);
  }
}

class HighElf extends Elf {
  constructor() {
    super();
    super.incrementAbilityScore(AbilityScore.INTELLIGENCE, 1);
    super.addAnotherLanguage(1);
  }
  // ElfWeapon Training: You have proficiency with the longsword, shortsword, shortbow, and longbow.
  // Cantrip: You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.
}

class WoodElf extends Elf {
  constructor() {
    super();
    super.incrementAbilityScore(AbilityScore.WISDOM, 1);
    super.setSpeed(35);
  }
  // Elf Weapon Training: You have proficiency with the longsword, shortsword, shortbow, and longbow.
  // Mask of the wild: You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena
}
      
class DarkElf extends Elf {
  constructor() {
    super();
    super.incrementAbilityScore(AbilityScore.CHARISMA, 1);
    this.hasSuperiorDarkvision = true;
  }
  // Superior Darkvision: Your darkvision has a radius of 120 feet.
  // Sunlight Sensitivity: You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to preceive is in direct sunlight.
  // Drow Magic: You know the dancing lights cantrip
    // 3rd level you can cast the faerie fire spell once per day
    // 5th level you can also cast the darkness spell once per day.
    // Charisma is your spellcasting ability for these spells
  // Drow Weapon Training: You have proficiency with rapiers, shortswords, and hand crossbows.
}