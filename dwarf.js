
export default const dwarf {
  const averageHeight = 4.5;
  const youngAge = 50;
  const oldAge = 350;
  const defaultAlignment = ["Lawful", "Good"];
  const averageWeight = 150;
  const size = "Medium";
  const speed = 25;
  const hasDarkvision = true;
  // Increase Constitution by 2 ... somehow
  // advantage on saving throws against poison
  // resistance against poison damage
  
  // proficiency with battleaxe, handaxe, throwing hammer, and warhammer, artisan's tools
  const weaponProficiency = ["Battleaxe", "Handaxe", "Throwing Hammer", "Warhammer"];
  const toolProficiency = ["Artisan Tools"];
  // and one of your choice: smith's tool, brewer's supplies, mason's tools.
  const proficiencyChoice = 1;
  const proficiencyChoices = ["Smith Tools", "Brewer Supplies", "Mason Tools"];
  
  // History checks relating to stone work gives double proficiency bonus instead of normal proficiency\
  
  const languages = ["Common", "Dwarvish"];
  
  const subraces = [
    {
      "name": "Hill Dwarf",
      // increase wisdom score by 1
      // incrase maximum hp by 1 and every time you gain a lvl
    },
    {
      "name": "Mountain Dwarf",
      // Increase strength score by 2
      "Proficiency Increase": ["Light Armor", "Medium Armor"],
    }
  ];
}
