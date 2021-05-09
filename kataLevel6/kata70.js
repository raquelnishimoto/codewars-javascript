/*
input: names - unsorted strings
output: case-agnostic sort

algo:
lowercase the elements in the list and sort them
for each of the elements in the list, replace them with the original value
return the list with the elements replaced
*/

const sortme = (names) => {
  const makeLowCase = (list) => list.map(word => word.toLowerCase());

  return makeLowCase(names).sort().map(name => {
    const idx = makeLowCase(names).indexOf(name);
    return names[idx];
  });
};

console.log(sortme(["Hello", "there", "I'm", "fine", "fan", "fam"]));
//  -->  ["fine", "Hello", "I'm", "there"]
console.log(sortme(["C", "d", "a", "B"]));
//             -->  ["a", "B", "C", "d"]