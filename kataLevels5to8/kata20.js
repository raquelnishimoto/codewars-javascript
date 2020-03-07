/*
** Your task is to sort a given string. Each word in the string will contain a single number. 
** This number is the position the word should have in the result.
** Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
** If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

** Examples: 
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

** Data:
input: string of words
output: new string of words (ordered)

** Algorithm:
split the string
loop through the string as many times the array length, starting with max length
verify if the string contains the number (starting from array length and decreasing in each iteration)
if the word contains the number, stack the word in a new array
return the result joined by a space
*/

// Option 1
function order1(words) {
  words = words.split(' ');
  let order = 1;
  let orderedList = [];

  while (order <= words.length) {
    for (let idx = 0; idx < words.length; idx++) {
      if (words[idx].includes(order) || words[idx] === "") {
        orderedList.push(words[idx]);
        order += 1;
      }
    }
  }
  return orderedList.join(" ");
}

// Option 2
function order(words) {
  return words.split(' ').sort((a, b) => {
    return a.match(/\d/) - b.match(/\d/);
  }).join(' ');
}

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log(order(""));