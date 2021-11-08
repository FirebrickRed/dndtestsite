
//   // Lucky: when you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.
//   // Brave: you have advantage on saving throws against being frightened.
//   // Halfling Nimbleness: you can move through the space of any creature that is of a size larger than yours


class Halfling extends Race {
  constructor() {
    super(20, 250, 3, 40);
    super.setAlignment(Alignment.LAWFUL_GOOD);
    super.setSize(Size.SMALL);
    super.setSpeed(25);
    super.incrementAbilityScore(AbilityScore.DEXTERITY, 2);
    super.addLanguage([Language.HALFLING]);
  }

  static incrementAbilityScore(abilityToIncrement, amountToIncrementBy) {
    super.incrementAbilityScore(abilityToIncrement, amountToIncrementBy);
  }
}

class Lightfoot extends Halfing {
  constructor() {
    super();
    super.incrementAbilityScore(AbilityScore.CHARISMA, 1);
    // Naturally Stealthy: You can attempt to hide even when you are obscured a creature that is at least onse size larger than you
  }
}

class Stout extends Halfling {
  constructor() {
    super();
    super.incrementAbilityScore(AbilityScore.CONSTITUTION, 1);
    // Stout Resilience: You have advantage on saving throws against poison, and you have resistance against poison damage.
  }
}