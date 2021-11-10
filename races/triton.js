class Triton extends Race {
  constructor() {
    super(15, 200, 5, 150);
    super.incrementAbilityScore(AbilityScore.STRENGTH, 1);
    super.incrementAbilityScore(AbilityScore.CONSTITUTION, 1);
    super.incrementAbilityScore(AbilityScore.CHARISMA, 1);
    super.setAlignment(Alignment.LAWFUL_GOOD);
    // Swimming speed of 30
    super.addLanguage([Language.PRIMORDIAL]);
  }
  // Amphibious: You can breathe air and water
  // Control Air and Water: A child of the sea, you can call on the magic of elemental air and water. You can cast fog cloud with this trait. Starting at 3rd level, you can cast gust of wind with it, and starting at 5th level, you can also cast wall of water with it. Once you cast a spell with this trait, you can't do so again until you finish a long rest. Charisma is your spellcasting ability for these spells
  // Emissary of the sea: Aquatic beasts have an extraordinary affinity with your people. You can communicate simple ideas with beasts that can breathe water. They can understand the meaning of your words, though you have no special ability to understand them in return
  // Guardians of the Depths: Adapted to even the most extreme ocean depths, you have resistance to cold damage, and you ignore any of the drawbacks caused by a deep, underwater environment
}