/*
Write a function mineLocation/MineLocation that accepts a 2D array,
and returns the location of the mine. The mine is represented as the
integer 1 in the 2D array. Areas in the 2D array that are not the mine
will be represented as 0s.

The location returned should be an array (Tuple<int, int> in C#) where the
first element is the row index, and the second element is the column index
of the bomb location (both should be 0 based). All 2D arrays passed into your
function will be square (NxN), and there will only be one mine in the array.

input: array of arrays of any length
output: tuple - array with two elements:
-> The 1st element represents the row idx.
-> The 2nd element represents the column idx

keep track of the row idx -> loop through each element A in the array
for each A find indexOf num 1 if not -1,
return that index and assign it to column idx
and break the loop

*/

const mineLocation = (mineMap) => {
  let [row, column] = [0, 0];

  for (let rowIdx = 0; rowIdx < mineMap.length; rowIdx++) {
    if (mineMap[rowIdx].indexOf(1) !== -1) {
      [row, column] = [rowIdx, mineMap[rowIdx].indexOf(1)];
    }
  }

  return [row, column];
};

console.log(mineLocation([ [1, 0], [0, 0] ]));
//, [0, 0]);
console.log(mineLocation([ [1, 0, 0], [0, 0, 0], [0, 0, 0] ]));
//, [0, 0]);
console.log(mineLocation([ [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0] ]));
//, [2, 2]);
console.log(mineLocation( [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] ));
// => returns [0, 0]
console.log(mineLocation( [ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] ));
// => returns [1, 1]
console.log(mineLocation( [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] ));
// => returns [2, 1]