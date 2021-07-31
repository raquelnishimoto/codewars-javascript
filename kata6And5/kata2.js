/*
input: string with numbers + K or M + ohms
output: string of four colors

algorithm:
the input has three parts:
1. the first and second bands representing the first digits
2. the remaining 0's and the letters representing the multiplier
3. the string ohms

split the input into these three parts
for the first part, split the numbers:
get the 1st color by the digit
get the 2nd color by the digit
the number of zeros are the fist part length - 2

if there is a letter K or M return the color representing that color
PLUS the number of zeros
OR return the color by the number of zeros from the first part

Return that string + gold
*/

const colorByOhms = {
  0: "black",
  1: "brown",
  2: "red",
  3: "orange",
  4: "yellow",
  5: "green",
  6: "blue",
  7: "violet",
  8: "gray",
  9: "white",
};

// if there is M or k and one zero at the 3rd num sum + 2
const multiple = (letter) => {
  if (letter === "M") {
    return 6;
  } else if (letter === "k") {
    return 3;
  } else {
    return 0;
  }
};

const encodeResistorColors = (ohmsString) => {
  const ohms = ohmsString
    .split(/(\d+[.]\d)|(\d+)| /)
    .filter((validString) => validString);

  const [first, second] = ohms[0].match(/[0-9]/g);
  const letter = ohms[1];
  const firstColor = colorByOhms[first];
  const secondColor = colorByOhms[second || 0];
  const lenghtOfDigits = ohms[0].split('.')[0].length;

  switch (lenghtOfDigits) {
    case 3:
      return `${firstColor} ${secondColor} ${colorByOhms[multiple(letter) + 1]} gold`;
    case 2:
      return `${firstColor} ${secondColor} ${colorByOhms[multiple(letter)]} gold`;
    case 1:
      return `${firstColor} ${secondColor} ${colorByOhms[multiple(letter) - 1]} gold`;
  }
  return null;
};

console.log(encodeResistorColors("10 ohms"));
// //, "brown black black gold")
console.log(encodeResistorColors("47 ohms"));
// //, "yellow violet black gold")
console.log(encodeResistorColors("100 ohms"));
// //, "brown black brown gold")
console.log(encodeResistorColors("220 ohms"));
// // //, "red red brown gold")
console.log(encodeResistorColors("330 ohms"));
// //, "orange orange brown gold")
console.log(encodeResistorColors("470 ohms"));
// //, "yellow violet brown gold")
console.log(encodeResistorColors("680 ohms"));
//, "blue gray brown gold")
console.log(encodeResistorColors("1k ohms"));
//, "brown black red gold")
console.log(encodeResistorColors("4.7k ohms"));
// //, "yellow violet red gold")
console.log(encodeResistorColors("10k ohms"));
// // , "brown black orange gold")
console.log(encodeResistorColors("22k ohms"));
// //, "red red orange gold")
console.log(encodeResistorColors("47k ohms"));
// //, "yellow violet orange gold")
console.log(encodeResistorColors("100k ohms"));
// //, "brown black yellow gold")
console.log(encodeResistorColors("330k ohms"));
// //, "orange orange yellow gold")
console.log(encodeResistorColors("1M ohms"));
// //, "brown black green gold")
console.log(encodeResistorColors("2M ohms"));
// //, "red black green gold")
