/*
you will be given an array of integers and your task is to return the number
of arithmetic progressions of size 3 that are possible from that list.


for each number a
find two other numbers that form an arithmetic expression within the given list,
find the common difference d between the following n = a[idx+]
test if  n + d is found in the following sequence


*/

const getProgression = (firstTerm, listOfNum) => {
  return listOfNum.reduce((acc, curr, idx) => {
    const diff = curr - firstTerm;
    const thirdNum =
    listOfNum.slice(idx + 1).find(num => num === curr + diff);

    if (thirdNum) {
      acc[acc.length] = [firstTerm, curr, thirdNum];
    }

    return acc;
  }, []);
};

const solve = (arr) => {
  return arr.reduce((acc, curr, idx) => {
    if (idx < arr.length - 2) {
      const list = arr.slice(idx + 1);
      const arithmeticProgressionOfThree = getProgression(curr, list);

      acc = acc.concat(arithmeticProgressionOfThree);
    }

    return acc;
  }, []).length;
};

console.log(solve([1,2,3,4,5]));
//,4);
console.log(solve([1,2,3,5,7,9]));
//,5);
console.log(solve([0,5,8,9,11,13,14,16,17,19]));
//,10);
console.log(solve([0,1,2,3,5,6,7,11,13,15,17,19]));
//,17);
console.log(solve([0,1,4,5,7,9,10,13,15,16,18,19]));
//,15);
console.log(solve([0,1,2,3,5,8,11,13,14,16,18,19]));
//,13);
//,5);