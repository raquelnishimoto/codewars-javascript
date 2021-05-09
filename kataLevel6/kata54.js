/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.

replace the first letter of a word with the letter capitalised
split the word where there is a space, then join the words without space
check if the length of the word is greater than 140 or if the result is an empty string
if yes, return false
if no, add a hashtag at the start of the txt and return that
*/

const generateHashtag = (text) => {
  const hashTag = '#' + text
    .replace(/(\b\w)/g, ($1) => $1.toUpperCase()).split(/\s+/)
    .join('');
  return hashTag.length > 1 && hashTag.length <= 140 ? hashTag : false;
};

console.log(generateHashtag(" Hello there thanks for trying my Kata"));
console.log(generateHashtag("    Hello     World   "));
console.log(generateHashtag(""));
//, false, "Expected an empty string to return false")
console.log(generateHashtag(" ".repeat(200)));
//, false, "Still an empty string")
console.log(generateHashtag("Do We have A Hashtag"));
//, "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
console.log(generateHashtag("Codewars"));
//, "#Codewars", "Should handle a single word.")
console.log(generateHashtag("Codewars Is Nice"));
//, "#CodewarsIsNice", "Should remove spaces.")
console.log(generateHashtag("Codewars is nice"));
//, "#CodewarsIsNice", "Should capitalize first letters of words.")
console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
//, "#CodeWars")
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"));
//, false, "Should return false if the final word is longer than 140 chars.")
console.log(generateHashtag("a".repeat(139)));
//, "#A" + "a".repeat(138));
//, "Should work")
console.log(generateHashtag("a".repeat(140)));
//, false, "Too long")