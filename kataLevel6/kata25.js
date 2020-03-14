/*
** Problem: 
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once 
in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

** Examples:
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

** Data:
input: string
output: integer
data structure: simple object, where the key is a char and the value is the # of occurence(s) of the char

** Algorithm:
loop through the chars in a string
count how many occurences of this char is in the string
loop trough each key-value pair and count how many values are larger than 1
return that count. 
*/

function duplicateCount(text) {
  let count = {};
  let occurence = 0;
  text = text.toLowerCase();

  text.split('').forEach(char => {
    const regExp = RegExp(char, 'g');
    count[char] = text.match(regExp).length;
  });
  for (char in count) {
    if (count[char] >= 2)
      occurence += 1;
  }
  return occurence;
}

console.log(duplicateCount(""));
console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("Indivisibility"));
console.log(duplicateCount("Indivisibilities"));