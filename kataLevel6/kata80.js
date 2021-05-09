/*
You are given a secret message you need to decipher.
Here are the things you need to know to decipher it:

For each word:
the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)

input: encoded string of words
output: decoded string

algorithm:
map each word in the string
get the UTF16 by matching any digits, joining them and converting them to numbers
identify the letter from the UTF16
take only the letters from the word and swap first letter with last one
join the strings and return them
*/

const decipherThis = (encodedSentence) => {
  return encodedSentence.split(' ').map((word) => {
    const letters = (word.match(/[a-z]/gi) || []).join('');
    const decodeUTF16 = String.fromCodePoint(Number(word.match(/\d/g).join('')));
    const startAndEndSwapped = letters.length > 1
      ? letters[letters.length - 1]
    + letters.slice(1, letters.length - 1)
    + letters[0]
      : letters;

    return decodeUTF16 + startAndEndSwapped;
  }).join(' ');
};


console.log(decipherThis('72olle 103doo 100ya')); // 'Hello good day'
console.log(decipherThis('82yade 115te 103o')); // 'Ready set go'
console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'));