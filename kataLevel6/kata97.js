/*
You are given a list/array which contains only integers (positive and negative).
Your job is to sum only the numbers that are the same and consecutive.
The result should be one list.

Extra credit if you solve it in one line.
You can assume there is never an empty array and there will always be an integer.

input: array of integers
output: array of integers with a length that is equal to less than input

algorithm:
reduce the input list, for each curr number check if the num
is at idx 0 - yes, return num
idx - 1 is equal to curr idx - yes, take last num from acc list and sum to curr num.
no, return curr num.
*/

const sumConsecutives = (list) => {
  return list.reduce((acc, curr, idx) => {
    let sum = acc[acc.length - 1] + curr;
    return curr === list[idx - 1] ? [...acc.slice(0, acc.length - 1), sum] : [...acc, curr];
  }, []);
};


console.log(sumConsecutives([1,4,4,4,0,4,3,3,1]));
//,[1,12,0,4,6,1], "on list [1,4,4,0,4,3,3,1] you get ")
console.log(sumConsecutives([1,1,7,7,3]));
//,[2,14,3], "on list [1,1,7,7,3] you get ")
console.log(sumConsecutives([-5,-5,7,7,12,0]));
//,[-10,14,12,0], "on list [-5,-5,7,7,12,0] you get ")
console.log(sumConsecutives([3,3,3,3,1]));
//,[12, 1], "on list [3,3,3,3,1] you get " )

