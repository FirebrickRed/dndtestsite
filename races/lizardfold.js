class Lizardfolk extends Race {
  constructor() {
    super(14, 60, 6, 200);
    super.increaseAbilityScore(AbilityScore.CONSTITUTION, 2);
    super.increaseAbilityScore(AbilityScore.WISDOM, 1);
    super.addLanguage([Language.DRACONIC]);
    // swimming speed of 30 feet
  }
  // Bite: Your fanged maw is a natural weapon, which you can use to make unarmed strikes. If you hit with it, you deal piercing damage equal to 1d6 + your strength modifier, instead of the bludgeoning damage normal for an unarmed strike
  // Cunning Artisan: As part of a short rest, you can harvest bone and hide from a slain beast, construct, dragon, monstoristy, or plant creature of size small or larger to create one of the following items: a shield, a club, a javelin, or 1d4 darts or blowgun needles. To use this trait, you need a blade, such as a dagger, or appropriate artisan's tools, such as leatherworker's tools
  // Hold Breath: You can hold your breath for up to 15 minutes at a time
  // Hunter's Lore: You gain proficiency with two of the following skills of your choice: Animal Handling, Nature, Perception, Stealth, and Survival
  // Natural Armor: You have tough, scaly skin. When you aren't wearing armor, your AC is 13 + your dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC, a shield's benefits apply as normal while you use your natural armor.
  // Hungry Jaws: In battle you can throw yourself into a vicious feeding frenzy. As a bonus action you can make a special attack with your bite. If the attack hits, it deals its normal damage, and you gain temporary hit points (minimum of 1) equal to your Constitution modifier, and you can't use this trait again until you finish a short or long rest.
}