/*
Write a function ip_to_int32(ip) ( JS: ipToInt32(ip) )
that takes an IPv4 address and returns a 32 bit number.

input: string with a dot separating the 4 sections
output: decimal number representing 32 bits

algo:
split the string where there is a dot.
for each of the substrings convert them to the binary equivalent
join the subsections and convert the string to decimal

convert from deminal to binary
input num, output string of 0 and 1
take the remainder of num when dividing by 2
divide input by 2 until num is zero

convert binary to decimal
*/

const convertToBinary = (decimal, binary = '') => {
  if (decimal <= 0) {
    return binary;
  } else {
    binary = String(parseInt(decimal, 10) % 2) + String(binary);
    return convertToBinary(parseInt((decimal / 2), 0), binary);
  }
};

const convertToOctet = (digits) => {
  const zeroPad = '0'.repeat(digits.length >= 8 ? 0 : 8 - digits.length);
  return zeroPad + digits;
};

const convertToDecimal = (binary) => {
  return binary.split('').reverse().map((curr, idx) => {
    return curr * Math.pow(2, idx);
  }).reduce((acc, curr) => acc + curr);

};

const ipToInt32 = (Ip) => {
  return convertToDecimal(Ip.split('.').map(curr => {
    return convertToOctet(convertToBinary(curr));
  }).join(''));
};

console.log(ipToInt32("128.32.10.1"));
console.log(convertToDecimal('1110010'));