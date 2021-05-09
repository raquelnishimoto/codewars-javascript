/*
Implement a function likes :: [String] -> String,
which must take in input array,
containing the names of people who like an item.
It must return the display text as shown in the examples.

input: array with peoples names
output: string joining the names

algorithm:
destructure array, first three elements + the remaining array embeded
for each index, if the index is 1 join name to existing string with a comma
if index is 2 join name with 'and (name) like this'
if index is greater than 3 return string joining 'and (3 - array.length) like this.
return 'no one likes this' if input length is 0
*/

const likes_ = (names) => {
  if (names.length === 0) return "no one likes this";
  if (names.length === 1) return `${names.join()} likes this`;

  return names.slice(0, 3).reduce((acc, curr, idx) => {
    if (
      (idx === 1 && names.length > 2)
    ) {
      return acc + `, ${curr}`;
    } else if (
      (idx === 1 && names.length === 2) ||
      (idx === 2 && names.length === 3)
    ) {
      return acc + ` and ${curr} like this`;
    } else if (idx === 2 && names.length > 3) {
      return acc + ` and ${names.length - 2} others like this`;
    }
    return acc + curr;
  }, "");
};

const likes = (names) => {
  switch(names.length) {
    case 0:
      return `no one likes this`;
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
     return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
};

console.log(likes([]));
// -- must be "no one likes this"
console.log(likes(["Peter"]));
// -- must be "Peter likes this"
console.log(likes(["Jacob", "Alex"]));
// -- must be "Jacob and Alex like this"
console.log(likes(["Max", "John", "Mark"]));
// -- must be "Max, John and Mark like this"
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
// -- must be "Alex, Jacob and 2 others like this"
