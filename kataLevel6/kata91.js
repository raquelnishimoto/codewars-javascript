/*
Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}
returns true / True if every element in an array is an integer or a float with no decimals.
returns true / True if array is empty.
returns false / False for every other input.


algorithm:
check if any element in the array is an interger or float, by comparing
if parseInt (integer converting any valid num) is equal to Number (number with decimals and NaN)

*/

const isIntArray = (list) => {
  if (list == null || typeof list !== Array) return false;
  return list.every((element) => parseInt(element, 10) === Number(element));
};

console.log(isIntArray(NaN));
//, true, "Input: []");
console.log(isIntArray([1, 2, 3, 4]));
//, true, "Input: [1, 2, 3, 4]");
console.log(isIntArray([1, 2, 3, NaN]));
//, false, "Input: [1, 2, 3, NaN]");