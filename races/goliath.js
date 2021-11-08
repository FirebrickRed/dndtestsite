class Goliath extends Race {
  constructor() {
    super(17, 100, 7.5, 310);
    super.incrementAbilityScore(AbilityScore.STRENGTH, 2);
    super.incrementAbilityScore(AbilityScore.CONSTITUTION, 1);
    super.setAlignment(Alignment.LAWFUL_NEUTRAL);
    super.addLanguage([Language.GIANT]);
  }
  // Natural Athlete: You have proficiency in the Athletics skill.
  // Stone's Endurance: You can focus yourself to occasionally shrug off injury. When you take damage, you can use your reaction to roll a d12. Add your constitution modifier to the number rolled, and reduce the damage by that total. After you use this trait, you can't use it again until you finish a short or long rest.
  // Powerful Build: You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.
  // Mountain Born: You're acclimated to high altitude, including elevations aboce 20,000 feet. You're also naturally adapted to cold climates, as descripbed in chapter 5 of the Dungon Master's Guild.
}