/*
Consider an array containing cats and dogs.
Each dog can catch only one cat,
but cannot catch a cat that is more than n elements away.
Your task will be to return the maximum number of cats that can be caught.

input: array and number
output: number, representing the num of cats removed from list

algorithm:
for each animal in list check if the oposite is ahead,
starting from distance, iterating until curr idx, and skipping idx
in black list
if match is found replace position with an 'X',
and add idx to black list and break from iteration
filter all 'X' and return length
*/

function solve(animals, distance) {
  let catsAndDogs = animals.join("").split("");

  for (let idx = 0; idx < animals.length; idx++) {
    const replaceWithX = (match) => {
      for (let reach = 1; reach <= distance; reach++) {
        if (catsAndDogs[idx + reach] !== match) continue;
        catsAndDogs.splice(idx + reach, 1, "X");
        break;
      }
    };

    if (catsAndDogs[idx] === "X") continue;

    if (catsAndDogs[idx] === "D") {
      replaceWithX("C");
    } else {
      replaceWithX("D");
    }
  }
  return catsAndDogs.filter(x => x === 'X').length;
}

console.log(
  solve(
    ['C','C','D','D','C','D','D','D','C','D','C','C','C','D','C','D','C','C',
      'C','D','C','D','C','D','C','C','C','C'],
    3
  )
);

console.log(solve([ 'C',
'D',
'C',
'D',
'D',
'D',
'D',
'D',
'C',
'D',
'C',
'D',
'D',
'D',
'C',
'D',
'D',
'C',
'D',
'C',
'C',
'C',
'C',
'C',
'D',
'D',
'C',
'C',
'D',
'D',
'C',
'C',
'D',
'D',
'D',
'D',
'C',
'C',
'D',
'D',
'C',
'C',
'D',
'C',
'D',
'C',
'C',
'C',
'D',
'D',
'C',
'C',
'C',
'C',
'C',
'C',
'D',
'C',
'C',
'C',
'C',
'C',
'C',
'D',
'D',
'D',
'C',
'C',
'D',
'C',
'C',
'C',
'D',
'D',
'D',
'C',
'D',
'C',
'D',
'D',
'C',
'D',
'D',
'D',
'C',
'C',
'D',
'C',
'C',
'C',
'D',
'D',
'C',
'D',
'C',
'D',
'D' ], 10));
// 2, 0
// 3, 1
// 5, 4
// 6, 8
// 7, 10
// 9, 11
// 13, 12
// 15, 14
// 19, 16
// 21, 20
// 23, 22

// //,11);
