class Firbolg extends Race {
  constructor() {
    super(30, 500, 7.5, 270);
    super.incrementAbilityScore(AbilityScore.WISDOM, 2);
    super.incrementAbilityScore(AbilityScore.STRENGTH, 1);
    super.setAlignment(Alignment.NEUTRAL_GOOD);
    super.addLanguage([Language.ELVISH, Language.GIANT]);
  }
  // Firbolg Magic: You can cast detect magic and disguise self with this trait, using wisdom as your spellcasting ability for them. Once you cast either spell, you can't cast it again with this trait until you finish a short or long rest. When you use this version of disguise self, you can seem up to 3 feet shorter than normal, allowing you to more easily blend in with the humans and elves.
  // Hidden Step: As a bonus action, you can magically turn invisible until the start of your next turn or until you attack, make a damage roll, or force someone to make a saving throw. Once you use this trait, you can't use it again until you finish a short or long rest
  // Powerful Build: You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift
  // Speech of Beast and Leaf: You have the ability to communicate in a limited manner with beasts and plants. They can understand the meaning of your words, though you have no special ability to understand them in return. You have advantage on all Charisma checks you make to influence them.
}