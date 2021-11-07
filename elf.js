
export default const elf {
  const averageHeight = 5.5;
  const matureAge = 100;
  const oldAge = 750;
  const defaultAlignment = ["Chaos", "Good"];
  const averageWeight = 125;
  const size = "Medium";
  const speed = 30;
  const hasDarkvision = true;
  const languages = ["Common", "Elvish"];
  // most bards learn their language so they can add elvish ballads to their repertoires.
  // Increase Dexterity by 2 ... somehow
  
  // Proficiency
  // proficiency in perception skill
  // advantage on saving throws against being charmed
  // Magic can't put you to sleep
  // Elves don't need to sleep, instead they meditate for four hours a day. 
  
  const subraces = [
    {
      "name": "High Elf",
      // One type of high elf is haughty and reclusive, believing themselves to be superior to non elves and even other elves.
      // The other type of high elf are more common and more friendly.
      // Increase your intelligence score by one
      // weapon proficency with longsword, shortsword, shortbow, and longbow
      // you know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.
      // You can speak, read, and write one extra language of your choice.
    },
    {
      "name": "Wood Elf",
      // wisdom increase by one
      // proficiency with the longsword, shortsword, shortbow, and longbow
      // base walking speed increases to 35 feet.
      // you can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.
    },
    {
      "name": "Dark Elf",
      // Charisma increase by one
      // Superior Darkvision: radius of 120 feet
      // Sunlight Sensitivity: disadvantage on attack rolls and on wisdom(perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.
      // Drow Magic: You know the dancing lights cantrip
      //              3rd level you can cast the faerie fire spell once per day
      //              5th level you can also cast the darkness spell once per day, charisma is your spell casting ability for these spells
      // Drow Weapon Training: Proficiency with rapiers, shortswords, and hand crossbows.
    }
  ];
}
