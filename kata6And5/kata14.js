/*
input: array of strings, integer
output: string

algorithm:
if sequenceLength less than 1 or greater than list, or list is empty return ''
for each idx slice the list from idx until idx + sequenceLenght,
until the idx + length is less than list.length
return the joined strings

return the first greatest lenght

*/

const longestConsec = (list, sequenceLength) => {
  if (
    list.length === 0 ||
    sequenceLength > list.length ||
    sequenceLength <= 0
  ) {
    return "";
  }

  const comboOfWords = list.map((_, idx) => {
    let newWord =
      idx + sequenceLength <= list.length
        ? list.slice(idx, idx + sequenceLength).join("")
        : "";
    return newWord;
  });

  const lengthOfWords = comboOfWords.map((word) => word.length);

  const largestLength = Math.max(...lengthOfWords);

  return comboOfWords.find((word) => word.length === largestLength);
};

console.log(
  longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2)
);

console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
);
, "abigailtheta")
console.log(
  longestConsec(
    [
      "ejjjjmmtthh",
      "zxxuueeg",
      "aanlljrrrxx",
      "dqqqaaabbb",
      "oocccffuucccjjjkkkjyyyeehh",
    ],
    1
  )
);
//, "oocccffuucccjjjkkkjyyyeehh")
console.log(longestConsec([], 3));
//, "")
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2));
//, "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2));
//, "wlwsasphmxxowiaxujylentrklctozmymu")
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2));
//, "")
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3));
//, "ixoyx3452zzzzzzzzzzzz")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15));
//, "")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0));
//, "")
