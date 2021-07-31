/*
input: string
output: string

algorithm:
map the elements in the string.
initialise last element as { element at idx 0, count = 0}

idx is even,
check if last element is less than or equal idx + 1
yes -> return last element and last element = curr
no -> return idx + 1

idx is odd,
check if last element is greater than idx + 1 OR last element count is greater than 2
yes -> return last element and increment count of last element
no -> return idx + 1

up case elements at odd index
*/

// const arrange = (words) => {
//   words = words.split(" ");
//   return words.reduce((acc, curr, idx) => {
//     if (idx > words.length - 2) return acc;

//     if (idx === 0) {
//       return curr.length > words[idx + 1].length
//         ? [words[idx + 1], curr]
//         : words.slice(0, 2);
//     } else if (idx % 2 === 1) {
//       return acc[idx].length < words[idx + 1].length
//         ? [...acc.slice(0, idx), words[idx + 1], acc[idx]]
//         : [...acc.slice(0, idx), acc[idx], words[idx + 1]];
//     } else if (idx % 2 === 0) {
//       return acc[idx].length > words[idx + 1].length
//         ? [...acc.slice(0, idx), words[idx + 1], acc[idx]]
//         : [...acc.slice(0, idx), acc[idx], words[idx + 1]];
//     }
//     return acc;
//   }, []);
// };

const getInUpDownOrder = (words) => {
  return words.reduce((acc, curr, idx) => {
    if (words[idx + 1] == null) return acc;

    if (idx === 0) {
      return curr.length > words[idx + 1].length
        ? [words[idx + 1], curr]
        : words.slice(0, 2);
    }

    if (
      (idx % 2 === 1 && acc[idx].length < words[idx + 1].length) ||
      (idx % 2 === 0 && acc[idx].length > words[idx + 1].length)
    ) {
      return [...acc.slice(0, idx), words[idx + 1], acc[idx]];
    } else {
      return [...acc.slice(0, idx), acc[idx], words[idx + 1]];
    }
  }, []);
};

const arrange = (words) => {
  words = words.split(" ");
  const wordsInUpDownOrder = getInUpDownOrder(words);
  return wordsInUpDownOrder.reduce((acc, curr, idx) => {
    return idx % 2 === 0
      ? [...acc, curr.toLowerCase()]
      : [...acc, curr.toUpperCase()];
  }, []).join(' ');
};

console.log(arrange("who hit retaining The That a we taken") === "who RETAINING hit THAT a THE we TAKEN");
//, "who RETAINING hit THAT a THE we TAKEN"); // 3
console.log(arrange("on I came up were so grandmothers") === "i CAME on WERE up GRANDMOTHERS so");
//, "i CAME on WERE up GRANDMOTHERS so"); // 4
console.log(arrange("way the my wall them him") === "way THE my WALL him THEM");
//, "way THE my WALL him THEM"); // 1
console.log(arrange("turn know great-aunts aunt look A to back") === "turn GREAT-AUNTS know AUNT a LOOK to BACK");
//, "turn GREAT-AUNTS know AUNT a LOOK to BACK");
console.log(arrange("Braslia Braslia Eventually He I If She The Then They Waiting With a able about") === 'braslia EVENTUALLY he BRASLIA i SHE if THEN the WAITING they WITH a ABOUT able');