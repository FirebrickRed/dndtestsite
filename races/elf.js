
export default elf = () => {
  // Ability Score Increase: Increase your Dexterity score by 2
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
  
  // Keen Senses: you have proficiency in the perception skill
  // Fey Ancestry: You have advantage on saving throws against being charmed, and magic can't put you to sleep
  // Trance: Elves don't need to sleep. Instead they meditate deeply, remaining semiconscious, for 4 hours a day. (The common word for such meditation is "trance.") While meditating, you can dream after a fashion: such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.
  
  const subraces = [
    {
      "name": "High Elf",
      // One type of high elf is haughty and reclusive, believing themselves to be superior to non elves and even other elves.
      // The other type of high elf are more common and more friendly.
      // Ability Score Increase: Increase your Intelligence score by 1
      // ElfWeapon Training: You have proficiency with the longsword, shortsword, shortbow, and longbow.
      // Cantrip: You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.
      // Extra Language: You can speak, read, and write one extra language of your choice.
    },
    {
      "name": "Wood Elf",
      // Ability Score Increase: Increase your wisdom by 1.
      // Elf Weapon Training: You have proficiency with the longsword, shortsword, shortbow, and longbow.
      // Fleet of Foot: Your base walking speed increases to 35 feet.
      // Mask of the wild: You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena
    },
    {
      "name": "Dark Elf",
      // Ability Score Increase: Increase your charisma by 1
      // Superior Darkvision: Your darkvision has a radius of 120 feet.
      // Sunlight Sensitivity: You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to preceive is in direct sunlight.
      // Drow Magic: You know the dancing lights cantrip
        // 3rd level you can cast the faerie fire spell once per day
        // 5th level you can also cast the darkness spell once per day.
        // Charisma is your spellcasting ability for these spells
      // Drow Weapon Training: You have proficiency with rapiers, shortswords, and hand crossbows.
    }
  ];
}
