/*
You are going to be given an array of integers.
Your job is to take that array and find an index N where the sum of the integers
to the left of N is equal to the sum of the integers to the right of N.
If there is no index that would make this happen, return -1.

Input:
An integer array of length 0 < arr < 1000.
The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N.
If you do not find an index that fits these rules, then you will return -1.

Algorithm:
for each idx (curr idx) in the array:
sum the right side take the array and slice start from idx 0 to curr idx
sum the left side take the array and slice start from curr idx + 1 to array length

if the sum of both sides is equal, return the curr idx
If no curr idx is returned, return -1
*/

const findEvenIndex = (numbers) => {
  const sum = (list) => list.reduce((acc, curr) => acc + curr);

  for (let idx = 0; idx < numbers.length; idx++) {
    const leftSum = numbers.slice(0, idx).length === 0 ?
      0 :
      sum(numbers.slice(0, idx));
    const rightSum = numbers.slice(idx + 1, numbers.length).length === 0 ?
      0 :
      sum(numbers.slice(idx + 1, numbers.length));

    if (leftSum === rightSum) return idx;
  }

  return -1;
};

console.log(findEvenIndex([1,2,3,4,3,2,1]));
//,3, "The array was: [1,2,3,4,3,2,1] \n");
console.log(findEvenIndex([1,100,50,-51,1,1]));
//,1, "The array was: [1,100,50,-51,1,1] \n");
console.log(findEvenIndex([1,2,3,4,5,6]));
//,-1, "The array was: [1,2,3,4,5,6] \n");
console.log(findEvenIndex([20,10,30,10,10,15,35]));
//,3, "The array was: [20,10,30,10,10,15,35] \n");