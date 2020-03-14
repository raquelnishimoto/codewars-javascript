// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
  if (bool) {
    return 'Yes';
  } else {
    return 'No';
  }
}

console.log(boolToWord(true))
console.log(boolToWord(false))
console.log(boolToWord(0))
console.log(boolToWord(3))
console.log(boolToWord(NaN))