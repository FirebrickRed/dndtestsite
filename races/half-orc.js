//   // Menacing: you gain proficiency in the Intimidation skill
//   // Relentless Endurance: When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest
//   // Savage Attacks: When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.


class HalfOrc extends Race {
  constructor() {
    super(14, 75, 5.5, 200);
    super.incrementAbilityScore(AbilityScore.STRENGTH, 2);
    super.incrementAbilityScore(AbilityScore.CONSTITUTION, 1);
    super.setAlignment(Alignment.CHAOTIC_NEUTRAL);
    this.hasDarkvision = true;
  }
}