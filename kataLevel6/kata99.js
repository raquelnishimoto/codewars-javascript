/*
The resistor color codes

input: string of colors separated by white spaces
output: string with number of ohms and percentage of tolerance

algorithm:
split the colors and take,
twoDigits = first two elements representing the signficant value
multiplier = third element represents the decimal multiplier
forth element if present represents the tolerance

to get the resistors multiple two digits with multipler
for resistors less than 1000 ohms
for resistors greater or equal to 1000 ohms, but less than 1000000 ohms
for resistors greater or equal to 1000000 ohms

if there is a forth element, return the tolerance value (gold 5, silver 10),
otherwise default to 20%
*/

const significantValue = {
  black: "0",
  brown: "1",
  red: "2",
  orange: "3",
  yellow: "4",
  green: "5",
  blue: "6",
  violet: "7",
  gray: "8",
  white: "9",
};

const tolerance = { gold: 5, silver: 10 };

const decodeResistorColors = (bands) => {
  const colors = bands.split(" ");
  const firstTwoDigits = Number(
    significantValue[colors[0]] + significantValue[colors[1]]
  );
  const multipler = Math.pow(10, significantValue[colors[2]]);
  const resistor = firstTwoDigits * multipler;
  const tolerancePercentage = colors[3] ? tolerance[colors[3]] : 20;

  if (resistor < 1000) {
    return `${resistor} ohms, ${tolerancePercentage}%`;
  } else if (resistor >= 1000 && resistor < 1000000) {
    return `${resistor / 1000}k ohms, ${tolerancePercentage}%`;
  } else if (resistor >= 1000000) {
    return `${resistor / 1000000}M ohms, ${tolerancePercentage}%`;
  }
  return -1;
};

console.log(decodeResistorColors("yellow violet black gold"));
//, "47 ohms, 20%"
console.log(decodeResistorColors("yellow violet red gold") === "4.7k ohms, 5%");
//, "4.7k ohms, 5%"
console.log(decodeResistorColors("brown black green silver") === "1M ohms, 10%");
//, "1M ohms, 10%"
