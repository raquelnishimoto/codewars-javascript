/*
Your task is to Reverse and Combine Words.
It's not too difficult, but there are some things you have to consider...

So what to do?
Input: String containing different "words" separated by spaces

1. More than one word? Reverse each word and combine first with second, third with fourth and so on...
   (odd number of words => last one stays alone, but has to be reversed too)
2. Start it again until there's only one word without spaces
3. Return your result...

algorithm:
split the word where there is a space
for each word, split and reverse it

while array length is not 1
reduce the arrays joining whenever the idx is odd starting from 1

*/

function combine(text) {
  let result = [];
  for (let idx = 0; idx < text.length; idx += 2) {
    if (idx === text.length - 1 && text.length % 2 === 1) {
      result = [...result, text[idx]];
    } else {
      result = [...result, text[idx] + text[idx + 1]];
    }
  }
  return result.join(' ');
}

const reverseAndCombineText = (sentence) => {
  if (sentence.split(' ').length === 1) return sentence;
  const reverseWords = (text) => text.split(' ').map(word => word.split('').reverse().join(''));
  const words = reverseWords(sentence);

  if (combine(words).split(' ').length === 1) return combine(words);

  return reverseAndCombineText(combine(words));
};


// console.log(reverseAndCombineText("abc def") === "cbafed");
// // , "cbafed")
// console.log(reverseAndCombineText("abc def ghi jkl") === "defabcjklghi");
// //, "defabcjklghi")
console.log(reverseAndCombineText("dfghrtcbafed") === "dfghrtcbafed");
// //, "dfghrtcbafed")
console.log(reverseAndCombineText("234hh54 53455 sdfqwzrt rtteetrt hjhjh lllll12  44") === "trzwqfdstrteettr45hh4325543544hjhjh21lllll");
//, "trzwqfdstrteettr45hh4325543544hjhjh21lllll")
// console.log(reverseAndCombineText("sdfsdf wee sdffg 342234 ftt") === "gffds432243fdsfdseewttf");
// // //, "gffds432243fdsfdseewttf")