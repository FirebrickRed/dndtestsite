class Dwarf extends Race {
  constructor() {
    super(50, 350, 4.5, 150);
    super.incrementAbilityScore(AbilityScore.CONSTITUTION, 2);
    super.setAlignment(Alignment.LAWFUL_GOOD);
    super.setSpeed(25);
    this.hasDarkvision = true;
    super.addLanguage([Language.DWARVISH]);
  }

  static incrementAbilityScore(abilityToIncrement, amountToIncrementBy) {
    super.incrementAbilityScore(abilityToIncrement, amountToIncrementBy);
  }
} 
  // Dwarven Resilience: You have advantage on saving throws against poison, and you have resistance against poison damage.
  // Dwarven Combat Training: You have proficiency with the battleaxe, handaxe, throwing hammer, and warhammer.
  // Tool Proficiency: You gain proficiency with the artisan's tools of your choice: smith's tools, brewer's supplies, or mason's tools.
  // Stonecunning: Whenever you make an Intelligence(History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus
  
class HillDwarf extends Dwarf {
  constructor() {
    super();
    super.incrementAbilityScore(AbilityScore.WISDOM, 1);
  }
  // Dwarven Toughness: Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.
}

class MountainDwarf extends Dwarf {
  constructor() {
    super();
    super.incrementAbilityScore(AbilityScore.STRENGTH, 2);
  }
  // Swarven Armor Training: You have proficiency with light and medium armor.
}
