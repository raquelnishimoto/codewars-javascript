/*
** Problem:
** Take a Number And Sum Its Digits Raised To The Consecutive Powers. This sum gives the same number.
** We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive)
** and outputs a list of the sorted numbers in the range that fulfills the property described above.
** If there are no numbers of this kind in the range [a, b] the function should output an empty list.

** Example:
** sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]
** sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
** sumDigPow(90, 100) == []

** Data:
** input: two integers
** output: an array

** Algorithm:
** initialise array eureka
** go through each number number between 1 to 10 (inclusive)
** convert them to string - in order to manipulate each digit
** loop trough these digits summing Math.pow(number, power - incrementing in each loop)
** evaluate if number is equal to sum
** if truthy - push this number to array eureka 
*/

function sumDigPow(a, b) {
  let eureka = [];
  for (a; a <= b; a++) {
    let sumPow = a.toString().split('').reduce((sum, digit, index) => {
      return parseInt(sum) + Math.pow(parseInt(digit), (index + 1));
    });
    if (a === parseInt(sumPow)) {
      eureka.push(a);
    };
  } 
  return eureka;
}

// console.log(sumDigPow(134, 135));
console.log(sumDigPow(1, 10));
console.log(sumDigPow(1, 100));
console.log(sumDigPow(10, 100));
console.log(sumDigPow(90, 100));
console.log(sumDigPow(90, 150));
console.log(sumDigPow(50, 150));
console.log(sumDigPow(10, 150));