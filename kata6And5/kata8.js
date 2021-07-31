/*
Your job is to change the given string s using a non-negative integer n.

Each bit in n will specify whether to swap the case for each alpha char in s:
if the bit is 1, swap the case; if its 0, leave it as is.
When you finish with the last bit of n, start again with the first bit.

Skip the checking of bits when a non-alphabetic character is encountered,
but they should be preserved in their original positions.

get the base2 from base10
and repeat base2 until it is at least same size as string
split the string and for each char, map
checking if 1 from the idx of base2
swap if alpha char
*/

const getBase2 = (base10, base2 = '') => {
  return parseInt(base10, 10) > 0 ?
    getBase2(parseInt(base10 / 2, 10), (base10 % 2) + base2) :
    base2;
};

const swap = (str, number) => {
  const base2 = getBase2(number);
  let idx = -1;

  return str.split('').map((char) => {
    if ((/[a-zA-Z]/).test(char)) {
      idx += 1;
    }
    const bit = base2[idx % base2.length];

    if (bit === '1') {
      return (/[a-z]/).test(char) ?
        char.toUpperCase() :
        char.toLowerCase();
    }
    return char;
  }).join('');
};

console.log(swap("Hello world!", 11) === "heLLO wORLd!");
// 1011

console.log(swap("gOOd MOrniNg", 7864) === "GooD MorNIng");
//  -->  "GooD MorNIng"
console.log(swap("", 11345) === '');
//  -->  ""
console.log(swap("the lord of the rings", 0) === "the lord of the rings");
//  -->  "the lord of the rings"