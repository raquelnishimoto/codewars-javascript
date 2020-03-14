/*
** Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
** No floats or non-positive integers will be passed.

** Problem: 
** loop through an array, get the two lowest numbers and return the sum of these numbers

** Example: 
** [10, 343445353, 3453445, 3453545353453] should return 3453455.
** For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

** Data:
** input: arrays of integers
** output: sum of two integers 

** Algorithm:
** loop through the numbers sort them from largest to smallest
** retrive the last two numbers
** sum them and return this value
*/

function sumTwoSmallestNumbers(numbers) {
  let sortAsc = numbers.sort((a, b) =>  a - b);
  return sortAsc[0] + sortAsc[1];
}

console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453, 19]));