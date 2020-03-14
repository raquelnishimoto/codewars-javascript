/*
** Problem:
** You have an array of numbers.
** Your task is to sort ascending odd numbers but even numbers must be on their places.
** Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

** Examples:
** sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
** sortArray([5, 3, 1, 8, 0]) == [1, 3, 5, 8, 0]
** sortArray([]) == []

** Data:
** input: array
** output: array
manipulate data as an object where object[index] = number

** Algorithm:
** initialise an index variable with a value of 0
** initialise an array which will contain the sorted result
** store the position of all numbers - in order to identify the position of even numbers
** loop through the numbers in the array
** filter only odd numbers and sort them 
** loop through properties in the object
** if property value is even, push that value to the result array
** else push the array.charAt(index) to the result array
** increment index count
** return the result array
*/

// Option 1
function sortArray1(array) {
  const indexNumber = {};
  let sortedOdd = array.filter(num => num % 2 !== 0).sort((num1, num2) => num1 - num2);
  let result = [];
  let index = 0;

  array.forEach((num, idx) => {
    return indexNumber[idx] = num;
  });
  
  for(idx in indexNumber) {
    if(indexNumber[idx] % 2 === 0) {
      result.push(indexNumber[idx]);
    } else {
      result.push(sortedOdd[index]);
      index += 1;
    }
  }
  return result;
}

// Option 2
function sortArray(array) {
  const sortOdd = array.filter(num => num % 2 !== 0).sort((num1, num2) => num1 - num2);
  return array.map(number => number % 2 ? sortOdd.shift() : number);
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
console.log(sortArray([5, 3, 1, 8, 0]));
console.log(sortArray([]));