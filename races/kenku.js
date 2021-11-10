class Kenku extends Race {
  constructor() {
    super(12, 60, 5, 105);
    super.incrementAbilityScore(AbilityScore.DEXTERITY, 2);
    super.incrementAbilityScore(AbilityScore.WISDOM, 1);
    super.setAlignment(Alignment.CHAOTIC_NEUTRAL);
    super.addLanguage([Language.Auran]); // You can read and write but you can speak only by using your mimicry trait.
  }
  // Expert Forgery: You can duplicate other creatures' handwriting and craftwork. You have advantage on all checks made to produce forgeries or duplicates of existing objects.
  // Kenku Training: You are proficient in you choice of two of the following skills: Acrobatics, Deception, Stealth, and Sleight of Hand.
  // Mimicry: You can mimic sounds you have heard, including voices. A creature that hears the sounds you make can tell they are imitations with a successful Wisdom(Insight) check opposed by your Charisma(Deception) check.
}