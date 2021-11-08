const AbilityScore = {
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
    this.abilityScoreAdjustments = {
      [AbilityScore.STRENGTH]: 0,
      [AbilityScore.DEXTERITY]: 0,
      [AbilityScore.CONSTITUTION]: 0,
      [AbilityScore.INTELLIGENCE]: 0,
      [AbilityScore.WISDOM]: 0,
      [AbilityScore.CHARISMA]: 0,
    }
    this.extraLanguages = 0;
    this.additionalAbilityScore = 0;
  }

  static setAlignment(alignmentToBeSetTo) {
    this.defaultAlignment = alignmentToBeSetTo;
  }

  static setSize(newSize) {
    this.size = newSize;
  }

  static setSpeed(newSpeed) {
    this.speed = newSpeed;
  }

  static addLanguage(languageToAdd) {
    this.language = this.language.concat(languageToAdd);
  }

  static incrementAbilityScore(abilityToIncrement, amountToIncrementBy) {
    this.abilityScoreAdjustments[abilityToIncrement] += amountToIncrementBy;
  }

  static addAnotherLanguage(addThisAmount) {
    this.extraLanguages += addThisAmount;
  }

  static addToAdditionalAbilityScore(amountToAdd) {
    this.additionalAbilityScore += amountToAdd;
  }
}