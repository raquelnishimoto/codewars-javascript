/*
Your goal in this kata is to implement a difference function,
which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

input: two arrays of diff length
output: one array containing all elements that are not in array2

algorithm:
for each element in array1, check if the element is included in array2.
and only filter if this condition is false and the element that are not in array2,
*/


const arrayDiff = (list, itemsToRemove) => {
  return list.filter((num) => {
    return !itemsToRemove.includes(num);
  });
};


console.log(arrayDiff([1,2], [1]));
//, [2], "a was [1,2], b was [1], expected [2]")
console.log(arrayDiff([1,2,2], [1]));
//, [2,2], "a was [1,2,2], b was [1], expected [2,2]")
console.log(arrayDiff([1,2,2], [2]));
//, [1], "a was [1,2,2], b was [2], expected [1]")
console.log(arrayDiff([1,2,2], []));
//, [1,2,2], "a was [1,2,2], b was [], expected [1,2,2]")
console.log(arrayDiff([], [1,2]));
//, [], "a was [], b was [1,2], expected []")