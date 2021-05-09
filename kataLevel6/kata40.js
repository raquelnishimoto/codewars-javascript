/*
Requirement
return a string where:

the first and last characters remain in original place for each word
characters between the first and last characters must be sorted alphabetically
punctuation should remain at the same place as it started, for example: shan't -> sahn't
Assumptions

words are seperated by single spaces
only spaces separate words, special characters do not, for example: tik-tak -> tai-ktk
special characters do not take the position of the non special characters, for example: -dcba -> -dbca
for this kata puctuation is limited to 4 characters: hyphen(-), apostrophe('), comma(,) and period(.)
ignore capitalisation

for each word map all chars that are letters => empty element represent letters
filter all alpha
leave the first and last chars from alpha and sort the rest
go through the first map and whenever there is an empty space replace with sorted char
*/

const getSortedAlpha = (word) => {
  const alpha = word.split("").filter((char) => /[a-z]/gi.test(char));
  const middle = alpha.slice(1, alpha.length - 1);
  const sortedAlpha = `${alpha[0]}${middle.sort().join("")}${
    alpha[alpha.length - 1]
  }`;
  return sortedAlpha;
};

function ScrambleWords(sentence) {
  return sentence.split(" ").map((word) => {
    let idx = -1;
    return word.split('').map((char) => {
      const sortedAlpha = getSortedAlpha(word);
      if ((/[a-z]/gi).test(char)) {
        idx += 1;
        return sortedAlpha[idx];
      } else {
        return char;
      }
    }).join('');
  }).join(' ');
}

console.log(ScrambleWords("professionals") === 'paefilnoorsss');
// console.log(ScrambleWords("there's"));
//, 'paefilnoorsss', 'The first and last letters of a word should reamin in place with the inner letters sorted')
// console.log(ScrambleWords("you've gotta dance like there's nobody watching."));
//, "you've gotta dacne like teehr's nbdooy wachintg.')
// console.log(ScrambleWords('i'));
// //, 'i', 'Must handle single charater words')
// console.log(ScrambleWords('me'));
// //, 'me', 'Must handle 2 charater words')
// console.log(ScrambleWords("you"));
// //, 'you', 'Must handle 3 charater words')
console.log(ScrambleWords("card-carrying."));
// //, 'caac-dinrrryg', 'Only spaces separate words and punctuation should remain at the same place as it started')
// console.log(ScrambleWords("shan't"));
// //, "sahn't", 'Punctuation should remain at the same place as it started')
// console.log(ScrambleWords("-dcba"));
//, '-dbca', 'Must handle special character at the start')
// console.log(ScrambleWords('dcba.'));
// //, 'dbca.', 'Must handle special character at the end')
console.log(ScrambleWords("you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth.")
=== "you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth.");
