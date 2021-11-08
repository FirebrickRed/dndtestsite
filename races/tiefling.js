//   // Hellish Resistance: You have resistance to fire damage
//   // Infernal Legacy: You know the thaumaturgy cantrip.
//     // Once you reach 3rd leve, you can cast the hellish rebuke spell once per day as a 2nd level spell
//     // 5th Level you can also cast the darkness spell once per day.
//     // Charisma is your spellcasting ability for these spells

class Tiefling extends Race {
  constructor() {
    super(17, 110, 5.5, 175);
    super.incrementAbilityScore(AbilityScore.INTELLIGENCE, 1);
    super.incrementAbilityScore(AbilityScore.CHARISMA, 2);
    super.setAlignment(Alignment.CHAOTIC_EVIL);
    super.addLanguage([Language.INFERNAL]);
    this.hasDarkvision = true;
  }
}