/*
You are going to be given an array of integers.
Your job is to take that array and find an index N where the sum of the integers
to the left of N is equal to the sum of the integers to the right of N.
If there is no index that would make this happen, return -1.

Take each element in the array starting from index 0, then
sum elements on the left of the array
compare this value to the sum of all combination of elements on the right side,
starting from the elements on the right side.
if these two values are equal return the index position
*/

function findEvenIndex(array) {

  for (let idx = 0; idx < array.length; idx++) {
    let left = array.slice(0, idx);
    let leftSum = left.reduce((acc, curr) => acc + curr, 0);

    let right = array.slice(idx + 1);
    let rightSum = right.reduce((acc, curr) => acc + curr, 0);

    if (leftSum === rightSum) return idx;
  }
  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([1,100,50,-51,1,1]));
console.log(findEvenIndex([1,2,3,4,5,6]));
console.log(findEvenIndex([20,10,30,10,10,15,35]));
console.log(findEvenIndex([20,10,-80,10,10,15,35]));