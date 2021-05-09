/*
while num / 10 is greater or equal to 1
convert num to string, split it and multiple all string numbers
reassign that to num and evaluate until condition is falsy
*/

const persistence = (num) => {
  const isSingleDigit = (number) => parseInt(number, 10) / 10 < 1;
  let digits = num;
  let multipleTimes = 0;

  while (!isSingleDigit(digits)) {
    digits = String(digits).split('').reduce((acc, curr) => parseInt(acc * curr, 10), 1);
    multipleTimes += 1;
  }
  return multipleTimes;
};

console.log(persistence(39));
//,3);
console.log(persistence(4));
//,0);
console.log(persistence(25));
//,2);
console.log(persistence(999));
//,4);

