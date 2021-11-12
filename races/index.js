import { Alignment, Size, AbilityScore } from "../defaults";

export class Race {
  constructor(matureAge, oldAge, averageHeight, averageWeight) {
    this.matureAge = matureAge;
    this.oldAge = oldAge;
    this.averageHeight = averageHeight;
    this.averageWeight = averageWeight;
    this.defaultAlignment = Alignment.NEUTRAL;
    this.size = Size.MEDIUM;
    this.speed = 30;
    // this.language = [Language.COMMON]
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

  setAlignment(alignmentToBeSetTo) {
    this.defaultAlignment = alignmentToBeSetTo;
  }

  setSize(newSize) {
    this.size = newSize;
  }

  setSpeed(newSpeed) {
    this.speed = newSpeed;
  }

  addLanguage(languageToAdd) {
    this.language = this.language.concat(languageToAdd);
  }

 incrementAbilityScore(abilityToIncrement, amountToIncrementBy) {
    this.abilityScoreAdjustments[abilityToIncrement] += amountToIncrementBy;
  }

  addAnotherLanguage(addThisAmount) {
    this.extraLanguages += addThisAmount;
  }

  addToAdditionalAbilityScore(amountToAdd) {
    this.additionalAbilityScore += amountToAdd;
  }
}
