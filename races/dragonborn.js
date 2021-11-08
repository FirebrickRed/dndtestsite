
  
//   // Draconic Ancestry: You have draconic ancesty.
//   //    Choose one type of dragon from the Draconic Ancestry table
//   //    Your breath weapon and damage resistance are determined by the dragon type as shown in the table
//   const draconicAncestry = [
//     { "Dragon": "Black", "Damage Type": "Acid", "Breath Weapon": "5 by 30ft line (Dex. save)" },
//     { "Dragon": "Blue", "Damage Type": "Lightning", "Breath Weapon": "5 by 30ft line (Dex. save)" },
//     { "Dragon": "Brass", "Damage Type": "Fire", "Breath Weapon": "5 by 30ft line (Dex. save)" },
//     { "Dragon": "Bronze", "Damage Type": "Lightning", "Breath Weapon": "5 by 30ft line (Dex. save)" },
//     { "Dragon": "Copper", "Damage Type": "Acid", "Breath Weapon": "5 by 30ft line (Dex. save)" },
//     { "Dragon": "Gold", "Damage Type": "Fire", "Breath Weapon": "15ft. cone (Dex. save)" },
//     { "Dragon": "Green", "Damage Type": "Poison", "Breath Weapon": "15ft. cone (Con. save)" },
//     { "Dragon": "Red", "Damage Type": "Fire", "Breath Weapon": "15ft. cone (Dex. save)" },
//     { "Dragon": "Silver", "Damage Type": "Cold", "Breath Weapon": "15ft. cone (Con. save)" },
//     { "Dragon": "White", "Damage Type": "Cold", "Breath Weapon": "15ft. cone (Con. save)" },
//   ];
//   // Breath Weapon: You can use your action to exhale destructrive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation
//   // When you use your breath weapon, each creatures in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry.
//   // The DC for this saving throw equals 8 + your constitution modifier + your proficiency bonus.
//   // A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. 
//   // The damage increases to 3d6 at 6th lvl
//   // 4d6 at 11th level,
//   // 5d6 at 16th level.
//   // after you use your breath weapon, you can't use it again until you complete a short or long rest
//   // Damage Resistance: You have resistance to the damage type associated with your draconic ancestry
// }

class Dragonborn extends Race {
  constructor() {
    super(15, 80, 6, 250);
    super.incrementAbilityScore(AbilityScore.STRENGTH, 2);
    super.incrementAbilityScore(AbilityScore.CHARISMA, 1);
    super.setAlignment(Alignment.LAWFUL_GOOD);
    super.addLanguage([Language.DRACONIC]);
  }
}