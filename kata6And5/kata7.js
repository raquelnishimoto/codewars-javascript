/*
Binaries

split number and for each n convert to base 2
take its bits(length) and substract with 1, then
this times 0, followed by 1 + the binary n

return the concatenation of all these numbers

converting to base 2
divide n by 2 until result r is less than or equal to 0
for each result calculate and take the remainder
return the concatenation of the remainders

to decode:
getBits by reversing the logic
split where there is a sequence of zeros followed by 1
the length + 1 will be where the bit sequence is
parseInt with base 2 each number
return that mapping joined

*/
// const getBits = (digit) => {
//   let bits = '';
//   let num = Number(digit);

//   while (parseInt(num, 10) > 0) {
//     bits = String(parseInt(num, 10) % 2) + bits;
//     num /= 2;
//   }

//   return bits;
// };

const getPrependedBits = (sequence) => {
  let bitSize = sequence.match(/^0*(?=1)/)[0].length + 1;

  return bitSize > 1 ?
    sequence.slice(bitSize, bitSize * 2) :
    sequence.slice(bitSize, bitSize + 1);

};

function getBase10(digits, base10 = '') {
  const prependedBits = getPrependedBits(digits);
  const startOfNextCode = prependedBits.length > 1 ?
    prependedBits.length * 2 :
    prependedBits.length + 1;

  const convertToBase10 = parseInt(prependedBits, 2);

  return digits.slice(startOfNextCode).length > 0 ?
    getBase10(digits.slice(startOfNextCode), (base10 + convertToBase10)) :
    base10 + convertToBase10;
}

const decode = (base2) => {
  return getBase10(base2);
};

function getBits(digit, bits = '') {
  const num = Number(digit);
  const remainder = String(parseInt(num, 10) % 2);
  const quotient = num / 2;

  return parseInt(num, 10) > 0 ?
    getBits(quotient, (remainder + bits)) :
    bits;
}

const code = (numbersB10) => {
  return numbersB10.split('').map(num => {
    const bits = getBits(num) || 0;
    const zeros = '0'.repeat(bits.length - 1);
    return `${zeros}1${bits}`;
  }).join('');
};

// console.log(getAllBits('1010111111011011011111001100') === "0011121314");
// === "11101111110110110111"
// console.log(getBits('6'));

// console.log(code("773"));
// // // --> "001111001111011101110001100000011000001101001101"
// console.log(code("77338") === "0011110011110111011100011000");
// // //  --> "0011110011110111011100011000"
// console.log(code("0011121314") === "1010111111011011011111001100");
// // // --> "1010111111011011011111001100"

console.log(decode("001111001111011101110001100000011000001101001101") === "77338855");
// -> "77338855"
console.log(decode("0011110011110111011100011000") === "77338");
// -> "77338"
console.log(decode("1010111111011011011111001100") === "0011121314");
// -> "0011121314"