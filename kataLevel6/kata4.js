/*
** Given an array of integers your solution should find the smallest integer.
** You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/


function findSmallestInt(args) {
  let sorted = args.sort((a, b) => a - b);
  return sorted.shift();
}

console.log(findSmallestInt([34, 15, 88, 2])) 
//will return 2
console.log(findSmallestInt([34, -345, -1, 100])) 
//will return -345
