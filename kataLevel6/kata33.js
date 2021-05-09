/*
Given array of integers, count all pairs in that array and return their count.

create an object where the key is the number and the value is the count of occur
get all the values in an array and sum all values above 2,
return the result divided by two (rounded value e.g. 0.5 => 0)
*/

const duplicates = (numbers) => {
  const numberCount = numbers.reduce((acc, curr) => {
    acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
    return acc;
  }, {});
  return Object.values(numberCount).reduce((acc, curr) => {
    return acc + Math.floor(curr / 2);
  }, 0);
};

console.log(duplicates([1, 2, 5, 6, 5, 2]));
// ,2 );
console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]));
//,4 );
console.log(duplicates([0, 0, 0, 0, 0, 0, 0]));
//,3 );
console.log(duplicates([1000, 1000]));
// ,1 );
console.log(duplicates([]));
//,0 );
console.log(duplicates([54]));
// ,0 );
