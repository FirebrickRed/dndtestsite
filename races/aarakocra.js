// All need to add is flight and talons
class Aarakocra extends Race {
  constructor() {
    super(3, 30, 5, 90);
    super.addlanguage([Language.AARAKOCRA, Language.AURAN]);
    super.incrementAbilityScore(AbilityScore.DEXTERITY, 2);
    super.incrementAbilityScore(AbilityScore.WISDOM, 1);
    super.setAlignment(Alignment.NEUTRAL_GOOD);
    super.setSpeed(25);
  }
  // Flight: you have a flying speed of 50 feet. To use this speed you can't be wearing medium or heavy armor
  // Talons: You are proficient with your unarmed strikes which deal 1d4 slashing damage on a hit
}