/*
** Problem: Implement the function unique_in_order which takes as argument a sequence and returns a list of items 
** without any elements with the same value next to each other and preserving the original order of elements.

** Examples: 
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

** Data:
input: string or array
output: array of unique elements

** Algorithm:
capitalisation is considered unique

loop through the elements in the string
initialise a count that will loop through the array of unique elements
increment count everytime comparing elements of the string with last element of the array returns false
and push that string element to the array 
*/


var uniqueInOrder = function(iterable){
  let index = -1;
  let uniqueValues = []
  for(let idx = 0; idx < iterable.length; idx++) {
    if(uniqueValues[index] !== iterable[idx]) {
      uniqueValues.push(iterable[idx]);
      index += 1;
    }
  }
  return uniqueValues;
}


console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD'));
console.log(uniqueInOrder([1,2,2,3,3]));
