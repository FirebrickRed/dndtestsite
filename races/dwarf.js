
export default dwarf = () => {
  // Ability Score Increase: Increase your constitution by 2
  const averageHeight = 4.5;
  const matureAge = 50;
  const oldAge = 350;
  const defaultAlignment = ["Lawful", "Good"];
  const averageWeight = 150;
  const size = "Medium";
  const speed = 25;
  const hasDarkvision = true;
  
  // Dwarven Resilience: You have advantage on saving throws against poison, and you have resistance against poison damage.
  // Dwarven Combat Training: You have proficiency with the battleaxe, handaxe, throwing hammer, and warhammer.
  // Tool Proficiency: You gain proficiency with the artisan's tools of your choice: smith's tools, brewer's supplies, or mason's tools.
  // Stonecunning: Whenever you make an Intelligence(History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus

  const languages = ["Common", "Dwarvish"];
  
  const subraces = [
    {
      "name": "Hill Dwarf",
      // Ability Score Increase: Increase your Wisdom by 1
      // Dwarven Toughness: Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.
    },
    {
      "name": "Mountain Dwarf",
      // Ability Score Increase: Increase your Strength by 2
      // Swarven Armor Training: You have proficiency with light and medium armor.
    }
  ];
}
