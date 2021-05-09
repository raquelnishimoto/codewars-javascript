/*
Complete the function that

accepts two integer arrays of equal length
compares the value each member in one array to the corresponding member in the other
squares the absolute value difference between those two values
and returns the average of those squared absolute value difference between each member pair.

map through the first array, taking each element, substracting it and the element
in array 2 at the same position and squaring the result.
take the return value of the mapping, sum the results and divide it by the array length.
Return this result
*/

const solution = (list1, list2) => {
  return list1.map((number, idx) => {
    return Math.pow(Math.abs(number - list2[idx]), 2);
  }).reduce((acc, curr) => acc + curr) / list1.length;
};

console.log(solution([1,2,3],[4,5,6]));
//, 9)
console.log(solution([10,20,10,2],[10,25,5,-2]));
//, 16.5)
console.log(solution([0,-1], [-1,0]));
//, 1)