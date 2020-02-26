/*
** Reverse a string. The recursive function call should return the reversed result of the passed in string.
** reverseStr("cowbell") --> "llebwoc"

** first, identify the case base = if string.length <= 1 -> return string
** repetition return the char
*/

// Option 1
function reverseStr(string) {

  if (string.length <= 0) {
    return string;
  }
  return newString = reverseStr(string.substr(1)) + string.charAt(0);
}

// Option 2
function reverseStr2(string) {
  let charArray = string.split('');
  let reversed = new Array(charArray.length);
  let index = 0;
  for (let i = charArray.length; i >= 0; i--) {
    reversed[index] = charArray[i];
    index += 1;
  }
  return reversed.join('');
}

console.log(reverseStr("cowbell"));