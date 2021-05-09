/*
Re-order the characters of a string,
so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order.
Whitespace and punctuation shall simply be removed!
The input is restricted to contain no numerals and only words containing the english alphabet letters.

input: string with letters, punctuation and spaces
output: string in alpha order with no spaces or puntuation

algorith:
filter only alphabet letters, that are unique and sort this list
for each unique char, match all occurences in sentence
return the concatenation of these matches in a string
*/

const alphabetized = (sentence) => {
  // filter only alphabet letters, that are unique
  const onlyAlpha = sentence
    .toLowerCase()
    .match(/[a-z]/g);

  if (!onlyAlpha) return '';

  const uniqueAlpha = onlyAlpha.reduce((acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]), []);

  // sort this list and for each unique char, match all occurences in sentence
  return uniqueAlpha.sort().reduce((acc, curr) => {
    const regex = new RegExp(curr, 'gi');
    return acc.concat(sentence.match(regex));
  }, []).join('') || '';
};

console.log(alphabetized("The Holy Bible")); // "BbeehHilloTy"
console.log(alphabetized("!@#$%^&*()_+=-`,"));
console.log(alphabetized("   "));