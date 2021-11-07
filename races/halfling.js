
export default halfling = () => {
  const averageHeight = 3;
  const matureAge = 20;
  const oldAge = 250;
  const defaultAlignment = ["Lawful", "Good"];
  const averageWeight = 40;
  const size = "Small";
  const speed = 25;
  const hasDarkvision = false;
  // Ability Score Increase: Increase Dexterity score by 2
  // Lucky: when you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.
  // Brave: you have advantage on saving throws against being frightened.
  // Halfling Nimbleness: you can move through the space of any creature that is of a size larger than yours
  const languages = ["Common", "Halfling"]
  
  const subraces = [
    {
      "name": "Lightfoot",
      // Ability Score Increase: Increase Charisma score by 1
      // Naturally Stealthy: You can attempt to hide even when you are obscured a creature that is at least onse size larger than you
    },
    {
      "name": "Stout",
      // Ability Score Increase: Increase Constitution by 1
      // Stout Resilience: You have advantage on saving throws against poison, and you have resistance against poison damage.
    }
  ];
}
