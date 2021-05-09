/*
Given two arrays of strings a1 and a2 return a sorted array r
in lexicographical order of the strings of a1 which are substrings
of strings of a2.

input: two arrays
output: one array, sorted array of strings of a1 which are substrings of a2

algorithm:
filter all words in a1 check if there is a match in a2
return the sorted filter
*/

const inArray = (a1, a2) => {
  return a1.filter((word) => {
    const pattern = new RegExp(`${word}`);
    return a2.some((wordToMatch) => wordToMatch.match(pattern));
  }).sort();
};


const a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

const a1 = ["xyz", "live", "strong"];
console.log(inArray(a1, a2));
//, ["live", "strong"])
const a3 = ["live", "strong", "arp"];
console.log(inArray(a3, a2));
//, ["arp", "live", "strong"])
const a4 = ["tarp", "mice", "bull"];
console.log(inArray(a4, a2));
//, [])