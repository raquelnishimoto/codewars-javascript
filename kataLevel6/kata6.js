/*
** You live in the city of Cartesia where all roads are laid out in a perfect grid. 
** You arrived ten minutes too early to an appointment, so you decided to take the 
** opportunity to go for a short walk. The city provides its citizens with a Walk 
** Generating App on their phones -- everytime you press the button it sends you 
** an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
** You always walk only a single block in a direction and you know it takes you one minute 
** to traverse one city block, so create a function that will return true if the walk 
** the app gives you will take you exactly ten minutes (you don't want to be early or late!) 
** and will, of course, return you to your starting point. Return false otherwise.

** Note: you will always receive a valid array containing a random assortment of direction 
** letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
*/

/*
** each string in the array represents 1 min
** if array length is greater than 10 return false or less then 10
** for each n I have to have an s
** for each s I have to have an n
** for each e I have to have an w
** for each w I have to have an e
** if any of these cases is falsey then return false
** in order to return true all of these cases have to be truthy
*/

function isValidWalk(walk) {
  const northSteps = walk.filter(str => str === 'n').length;
  const southSteps = walk.filter(str => str === 's').length;
  const eastSteps = walk.filter(str => str === 'e').length;
  const westSteps = walk.filter(str => str === 'w').length;

  if (walk.length > 10 || walk.length < 10) {
    return false
  } else {
    if (northSteps !== southSteps) {
      return false;
    } else if (eastSteps !== westSteps) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));