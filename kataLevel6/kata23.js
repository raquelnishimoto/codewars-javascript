/* 
** Problem: The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) 
of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; 
otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If
sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

** Examples:
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"

** Data:
input: two arguments, string of integers and integer representing the size of a substring
output: new string - with the transformation required

** Algorithm:
initialise a new array
loop through the chunks of numbers (of size sz)
loop through each digit, 
convert each digit to a number, summing their cubes 
if they are divisible by 2, push that digit reversed to the new array
else push the chunk.slice(1) + chunk[0] 
return that array converted to string
*/

function revrot(str, sz) {
  let result = [];

  if (sz <= 0 || sz > str.length) return "";

  for(let idx = 0; idx < str.length; idx += sz) {
    let chunk = str.slice(idx, idx + sz).split('');
    if (chunk.length === sz) {
      let sumOfCubes = chunk.reduce((sum, digit) => {
        return parseInt(sum) + Math.pow(parseInt(digit), 3);
      });
      if (sumOfCubes % 2 === 0) {
        result.push(...chunk.reverse());
      } else {
        result.push(...chunk.slice(1), chunk.shift());
      }
    } else {
      result.push("");
    }
  }
  return result.join('');
}

// console.log(revrot("123234", 3))
console.log(revrot("123456987654", 6) === "234561876549");
console.log(revrot("123456987653", 6) === "234561356789");
console.log(revrot("66443875", 4) === "44668753");
console.log(revrot("66443875", 8) === "64438756");
console.log(revrot("664438769", 8) === "67834466");
console.log(revrot("123456779", 8) === "23456771");
console.log(revrot("", 8) === "");
console.log(revrot("123456779", 0) === "");
console.log(revrot("563000655734469485", 4) === "0365065073456944");