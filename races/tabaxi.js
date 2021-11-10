class Tabaxi extends Race {
  constructor() {
    super(17, 100, 6, 100);
    super.incrementAbilityScore(AbilityScore.DEXTERITY, 2);
    super.incrementAbilityScore(AbilityScore.CHARISMA, 1);
    super.setAlignment(Alignment.CHAOTIC_NEUTRAL);
    this.hasDarkvision = true;
    super.addAnotherLanguage(1);
  }
  // Feline Agility: Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can't use it again until you move 0 feet on one of your turns
  // Cat's Claws: Because of your claws, you have a climbing speed of 20 feet. In addition, your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your strength modifier, instead of the bludgeoning damage normal for an unarmed strike.
  // Cat's Talent: You have proficiency in the Perception and Stealth Skills
}