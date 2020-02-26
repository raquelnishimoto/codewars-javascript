/*
** Given an array, find the integer that appears an odd number of times.
** There will always be only one integer that appears an odd number of times.

** Problem: count how many times each integer appears in an array, 
** at the end of the loop, if that count is even, return the element
** since only one integer appears an odd number of times, there is no need to continue the loop once the integer is found.
** Examples: 
[1, 2, 2, 3, 3, 4, 4, 4, 4, 1, 1]
[1, 1, 7, 8, 8, 8, 2, 2, 3, 3, 4, 4, 4, 4,]
[2]

** Data:
** input: array of integers
** output: integer that appears an odd number of times 

** Algorithm: 
** take each individual element
** compare the to rest of the elements 
** if it is equal to any of them count += 1
** at the end of this inner loop, evaluate if count is odd
** if yes, return that number,
** if no, continue the loop

** Assumptions:
** the array will never be empty
** there will be at least one occurence that is odd
** there won't be more than one occurence that is odd
*/ 

// Option 1
function findOdd1(array) {
  let oddOccurence;
  array.forEach(number => {
    let count = 0;
    array.forEach(element => {
      if (number === element) {
        count += 1;
      }
    });
    if (count % 2 !==0) {
      oddOccurence = number;
    }
  });
  return oddOccurence;
}

// Option 2
function findOdd(array) {
  let intOccurences = {};
  array.forEach(number => {
    if (intOccurences[number]) {
      intOccurences[number] += 1;
    } else {
      intOccurences[number] = 1;
    }
  });
  for(value in intOccurences) {
    if (intOccurences[value] % 2 !== 0) {
      return value;
    };
  }
}

console.log(findOdd([1, 2, 2, 1, 1]));
console.log(findOdd([1, 2, 2, 3, 3, 4, 4, 4, 4, 1, 1]));
console.log(findOdd([1, 1, 7, 8, 8, 8, 2, 2, 3, 3, 4, 4, 4, 4, 0]));
console.log(findOdd([2]));
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]));