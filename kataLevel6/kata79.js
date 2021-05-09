/*
The input is a string str of digits.
Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk;
otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If
sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

algorithm:
slice the digits where in sizes of n, if the substring is less than size return ''
for each substring sum the cubes of its digits, if the result is divisible by 2 reverse the chunk
otherwise, take last digit and concatenate with the slice of the substring from 0 to its length

return the joint of this substrings

*/

const revrot = (digits, size) => {
  const subStrings = [];

  if (size <= 0) return '';

  for (let idx = 0; idx < digits.length; idx += size) {
    subStrings.push(digits.substring(idx, idx + size));
  }

  return subStrings.map((curr) => {
    if (curr.length !== size) return '';
    const sumOfCubes = curr.split('').reduce((acc, curr) => {
      return acc + Math.pow(Number(curr), 3);
    }, 0);

    if (sumOfCubes % 2 === 0) {
      return curr.split('').reverse().join('');
    }
    return curr.slice(1, curr.length) + curr[0];
  }).join('');
};

console.log(revrot("123456987654", 6));
// --> "234561876549"
console.log(revrot("123456987653", 6) === "234561356789");
// // --> "234561356789"
console.log(revrot("66443875", 4) === "44668753");
// // --> "44668753"
console.log(revrot("66443875", 8) === "64438756");
// // --> "64438756"
console.log(revrot("664438769", 8) === "67834466");
// // --> "67834466"
console.log(revrot("123456779", 8) === "23456771");
// // --> "23456771"
console.log(revrot("", 8) === '');
// // --> ""
console.log(revrot("123456779", 0) === '');
// // --> ""
console.log(revrot("563000655734469485", 4) === "0365065073456944");
// // --> "0365065073456944"