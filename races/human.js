class Human extends Race {
  constructor() {
    super(17, 100, 5, 175);
    // Could try to change this to a for each later
    super.incrementAbilityScore(AbilityScore.STRENGTH, 1);
    super.incrementAbilityScore(AbilityScore.DEXTERITY, 1);
    super.incrementAbilityScore(AbilityScore.CONSTITUTION, 1);
    super.incrementAbilityScore(AbilityScore.INTELLIGENCE, 1);
    super.incrementAbilityScore(AbilityScore.WISDOM, 1);
    super.incrementAbilityScore(AbilityScore.CHARISMA, 1);
    super.addAnotherLanguage(1);
  }
}
