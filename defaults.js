
// export const classes = [
//   "Artificer",
//   "Barbarian",
//   "Bard",
//   "Cleric",
//   "Druid",
//   "Fighter",
//   "Monk",
//   "Paladin",
//   "Ranger",
//   "Rogue",
//   "Sorcerer",
//   "Warlock",
//   "Wizard",
// ];

// export const races = [
//   "Dwarf",
//   "Elf",
//   "Hafling",
//   "Human",
//   "Dragonborn",
//   "Gnome",
//   "Half-Elf",
//   "Half-Orc",
//   "Tiefling",
// ];

// export const abilities = [
//   "Strength",
//   "Dexterity",
//   "Constitution",
//   "Intelligence",
//   "Wisdom",
//   "Charisma",
// ];

const AbilityScore = {
  STRENGTH: 'strength',
  DEXTERITY: 'dexterity',
  CONSTITUTION: 'constitution',
  INTELLIGENCE: 'intelligence',
  WISDOM: 'wisdom',
  CHARISMA: 'charisma',
}

const Alignment = {
  LAWFUL_GOOD: 'lawful_good',
  NEUTRAL_GOOD: 'neutral_good',
  CHAOTIC_GOOD: 'chaotic_good',
  LAWFUL_NEUTRAL: 'lawful_neutral',
  NEUTRAL: 'neutral',
  CHAOTIC_NEUTRAL: 'chaotic_neutral',
  LAWFUL_EVIL: 'lawful_evil',
  NEUTRAL_EVIL: 'neutral_evil',
  CHAOTIC_EVIL: 'chaotic_evil',
}

const Size = {
  FINE: 'fine',
  DIMINUTIVE: 'diminutive',
  TINY: 'tiny',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  HUGE: 'huge',
  GARGANTUAN: 'gargantuan',
  COLOSSAL: 'colossal',
}

const Language = {
  // TBD
}

class Race {
  constructor(matureAge, oldAge, averageHeight, averageWeight) {
    this.matureAge = matureAge;
    this.oldAge = oldAge;
    this.averageHeight = averageHeight;
    this.averageWeight = averageWeight;
    this.defaultAlignment = Alignment.NEUTRAL;
    this.size = Size.MEDIUM;
    this.speed = 30;
    this.language = [Language.COMMON]
  }

  static addLanguage(languageToAdd) {
    this.language = this.language.concat(languageToAdd);
  }
}