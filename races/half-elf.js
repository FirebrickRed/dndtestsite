//   // Fey Ancestry: you have advantage on saving throws against being charmed, and magic can't put you to sleep
//   // Skill Versatility: you gain proficiency in two skills of your choice

class HalfElf extends Race {
  constructor() {
    super(20, 180, 5.5, 150);
    super.setAlignment(Alignment.CHAOTIC_NEUTRAL);
    this.hasDarkvision = true;
    super.addLanguage([Language.ELVISH]);
    super.incrementAbilityScore(AbilityScore.CHARISMA, 2);
    super.addToAdditionalAbilityScore(2);
    super.addAnotherLanguage(1);
  }
}