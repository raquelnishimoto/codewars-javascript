/*
Problem: A stream of data is received and needs to be reversed.
Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

Example:
11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)

Should become: 
10101010  00001111  00000000  11111111
(byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

Data structure:
Input: array
[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
Output: array
[1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]
 
Algorithm:
produce an array of 2 levels: first level holds all the bytes, second level is an array with 8 bits
slice the array in groups of 8 elements
after all elements are slices, reverse the array
return that array flattened
*/

// Option 1
function dataReverse1(data) {
  let byte = [];
  let reversedBytes = [];
  for (let idx = 0; idx < data.length + 1; idx++) {
    if (idx > 0 && idx % 8 === 0) {
      byte.push(data.slice(idx - 8, idx));
    }
  }
  byte.reverse().map(array => array.map(bit => reversedBytes.push(bit)));
  return reversedBytes;
}

function dataReverse(data) {
  let reversedBytes = [];
  for (let idx = 0; idx < data.length; idx += 8) {
    reversedBytes.unshift(...data.slice(idx, idx + 8));
  }
  return reversedBytes;
}

console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]));