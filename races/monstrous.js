class BugBear extends Race {
  constructor() {
    super(16, 80, 7, 300);
    super.incrementAbilityScore(AbilityScore.STRENGTH, 2);
    super.incrementAbilityScore(AbilityScore.DEXTERITY, 1);
    super.setAlignment(Alignment.CHAOTIC_EVIL);
    this.hasDarkvision = true;
    super.addLanguage([Language.GOBILN]);
  }
  // Long-Limbed: when you make a melee attack on your turn, your reach for it is 5 feet greater than normal
  // Powerful Build: You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift
  // Sneaky: You are proficient in the Stealth skill
  // Surprise Attack: If you surprise a creature and hit it with an attack on your first turn in combat, the attack deals an extra 2d6 damage to it. You can use this trait only once per combat.
}

class Goblin extends Race {
  constructor() {
    super(8, 60, 3.5, 60);
    super.incrementAbilityScore(AbilityScore.DEXTERITY, 2);
    super.incrementAbilityScore(AbilityScore.CONSTITUTION, 1);
    super.setAlignment(Alignment.NEUTRAL_EVIL);
    this.hasDarkvision = true;
    super.addLanguage([Language.GOBLIN]);
  }
  // Fury of the Small: When you damage a creature with an attack or a spell and the creature's size is larger than yours, you can cause the attack or spell to deal extra damage to the creature. The extra damage equals your level. Once you use this trait you can't use it again until you finish a short or long rest.
  // Nimble Escape: You can take the Disengage or Hide action as a bonus action on each of your turns
}

class Hobgoblin extends Race {
  constructor() {
    super(17, 100, 5.5, 175);
    super.incrementAbilityScore(AbilityScore.CONSTITUTION, 2);
    super.incrementAbilityScore(AbilityScore.INTELLIGENCE, 1);
    super.setAlignment(Alignment.LAWFUL_EVIL);
    this.hasDarkvision = true;
    super.addLanguage([Language.GOBILN]);
  }
  // Martial Training: You are proficient with two martial weapons of your choice and with light armor
  // Saving Face: Hobgoblins are careful not to show weakness in front of their allies, for fear of losing status. If you miss with an attack roll or fail an ability check or a saving throw, you can gain a bonus to the roll equal to the number of allies you can see within 30 feet of you(maximum bonus of +5). Once you use this trait, you can't use it again until you finish a short or long rest.
}

class Kobold extends Race {
  constructor() {
    super(6, 120, 2.5, 30);
    super.incrementAbilityScore(AbilityScore.DEXTERITY, 2);
    super.incrementAbilityScore(AbilityScore.STRENGTH, -2);
    super.setAlignment(Alignment.LAWFUL_EVIL);
    super.setSize(Size.SMALL);
    this.hasDarkvision = true;
    super.addLanguage([Language.DRACONIC]);
  }
  // Grovel, Cower, and Beg: As an action on your turn, you can cower pathetically to distract nearby foes. Until the end of your next turn, your allies gain advantage on attack rolls against enemies within 10 feet of you that can see you. Once you use this trait, you can't use it again until you finish a short or long rest.
  // Pack Tactics: You have advantage on an attack roll against a creature if at least one of your allies is within 5 feet of the creature and the ally isn't incapacitated
  // Sunlight Sensitivity: You have disadvantage on attack rolls and on Wisdom(Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.
}

class Orc extends Race {
  constructor() {
    super(12, 50, 6, 255);
    super.incrementAbilityScore(AbilityScore.STRENGTH, 2);
    super.incrementAbilityScore(AbilityScore.CONSTITUTION, 1);
    super.incrementAbilityScore(AbilityScore.INTELLIGENCE, -2);
    super.setAlignment(Alignment.CHAOTIC_EVIL);
    this.hasDarkvision = true;
    this.addLanguage([Language.ORC]);
  }
  // Aggressive: As a bonus action, you can move up to your speed toward an enemy of your choice that you can see or hear. You must end this move closer to the enemy than you started.
  // Menacing: You are trained in the intimidation skill.
  // Powerful Build: You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift
}

class YuanTiPureblood extends Race {
  constructor() {
    super(17, 100, 5.5, 175);
    super.incrementAbilityScore(AbilityScore.CHARISMA, 2);
    super.incrementAbilityScore(AbilityScore.INTELLIGENCE, 1);
    super.setAlignment(Alignment.NEUTRAL_EVIL);
    this.hasDarkvision = true;
    super.addLanguage([Language.ABYSSAL, Language.DRACONIC]);
  }
  // Innate Spellcasting: You know the poison spray cantrip. You can cast animal friendship an unlimited number of times with this trait, but you can target only snakes with it.
    // 3rd Level: You can also cast suggestion with this trait
    // once you cast it you can't do so again until you finish a long rest
    // Charisma is your spellcasting ability for these spells
  // Magic Resistance: You hace advantage on saving throws against spells and other magical effects
  // Poison Immunity: You are immune to poison damage and the posoned condition.
}