import { Race } from "./races/index";
import { Aarakocra } from "./races/aarakocra";

export const AbilityScore = {
  STRENGTH: 'strength',
  DEXTERITY: 'dexterity',
  CONSTITUTION: 'constitution',
  INTELLIGENCE: 'intelligence',
  WISDOM: 'wisdom',
  CHARISMA: 'charisma',
}

const Money = {
  PLATINUM: 'platinum',
  GOLD: 'gold',
  ELECTRUM: 'electrum',
  SILVER: 'silver',
  COPPER: 'copper',
}

export const Alignment = {
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

export const Size = {
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

class CharacterSheet {
  constructor() {
    this.race = null;
    this.class = null;
    this.level = 0;
    this.maxHealth = 0;
    this.armorProficiencies = null;
    this.weaponProficiencies = null;
    this.toolProficiency = null;
    this.savingThrowProficiencies = null;
    this.skillProficiencies = null;
    this.abilities = null;
    this.backpack = null;
  }

  createCharacter(race, chosenClass) {
    this.race = chooseRace();
    this.class = chooseClass();
    this.maxHealth = setHealth();
  }

}

console.log(new Race());
console.log(new Aarakocra());