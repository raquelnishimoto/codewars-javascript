/*
You live in the city of Cartesia where all roads are laid out in a perfect grid.
You arrived ten minutes too early to an appointment, so you decided to take the
opportunity to go for a short walk. The city provides its citizens with a Walk
Generating App on their phones -- everytime you press the button it sends you
an array of one-letter strings representing directions to walk
(eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter
(direction) and you know it takes you one minute to traverse one city block,
so create a function that will return true if the walk the app gives you
will take you exactly ten minutes (you don't want to be early or late!)
and will, of course, return you to your starting point. Return false otherwise.
*/

/*
input: array with valid letters representing the directions 'n', 's', 'e', 'w'
For each 'n' there should be an 's'
For each 's' there should be an 'n'
For each 'e' there should be an 'w'
For each 'w' there should be an 'e'

each match accounts for 2 minutes of travelling,
and total trip must sum up 10 minutes.

count how many letters of each type there in the array
take the value/count of each 'n' and 's' and compare,
if their values match take that number and multiple for 2,
this will be the total minutes. Do the same with 'e' and 'w'.
Return true if the total minutes is 10.
*/

const getDirectionCount = (trajectory) => {
  return trajectory.reduce((acc, curr) => {
    acc[curr] = acc[curr] + 1 || 1;
    return acc;
  }, {});
};

const isValidWalk = (walk) => {
  const directionCount = getDirectionCount(walk);
  let totalMinutesToReturn = 0;
  totalMinutesToReturn += directionCount['n'] === directionCount['s'] ? directionCount['n'] || 0 : 0;
  totalMinutesToReturn += directionCount['w'] === directionCount['e'] ? directionCount['w'] || 0 : 0;
  return totalMinutesToReturn * 2 === 10;
};

//some test cases for you...
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
console.log(isValidWalk(['n','s','n','s','n','s','n','s','w','e']));
// //, 'should return true');
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
// // //, 'should return false');
console.log(isValidWalk(['w']));
// // //, 'should return false');
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));
// // //, 'should return false');