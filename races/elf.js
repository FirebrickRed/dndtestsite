
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

  static addLanguage(languageToAdd) {
    super.addLanguage(languageToAdd);
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

class Eladrin extends Elf {
  constructor() {
    super();
    super.incrementAbilityScore(AbilityScore.CHARISMA, 1);
  }
  // Fey Step: As a bonus action you can magically teleport up to 30 feet to an unoccupied space you can see
  // Once you use this trait you can't do so again until you finish a short or long rest.
    // 3rd level your fey step gains an additional effect based on your season;
    // if the effect requires a saving throw, the DC equals 8 + your proficiency bonus + your charisma modifier
    // if Autumn: immediately after you use your fey step, up to two creatures of your choice that you can see within 10 feet of you must succeed on a wisdom saving throw or be charmed by you for 1 minute, or until you or your companions deal any damage to it.
    // if Winter: when you sue your fey step one creature of your choice that you can see within 5 feet of you cefore you teleport must succeed on a wisdom saving throw or be frightened of you until the end of your next turn
    // if spring when you use your fey step you can touch one willing creature within 5 feet of you. That creature then teleports instead of you, appearing in an unoccupied space of your choice that you can see within 30 feet feet of you
    // if Summer Immediately after you use your fey step, each creature of your choice that you can see within 5 feet of you takes fire damage equal to your charisma modifier(minimum of 1 damage)
}

class SeaElf extends Elf {
  constructor() {
    super();
    super.incrementAbilityScore(AbilityScore.CONSTITUTION, 1);
    super.addLanguage([Language.AQUAN]);
  }
  // Sea Elf Training: You have proficiency with the spear, trident, light crossbow, and net
  // Child of the Sea: You have a swimming speed of 30 feet and you can breathe air and water
  // Friends of the sea: Using gestures and sounds, you can communicate simple ideas with any beast that has an innate swimming speed.
}

class ShadarKai extends Elf {
  constructor() {
    super();
    super.incrementAbilityScore(AbilityScore.CONSTITUTION, 1);
  }
  // Necrotic Resistance: you have resistance to necrotic damage
  // Blessing of the Raven Queen: As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can't do so again until you finish a long rest
    // 3rd level you also gain resistance to all damage when you teleport using this trait
    // the resistance lasts until the start of your next turn. During that time, you appear ghostly and transluccent
}