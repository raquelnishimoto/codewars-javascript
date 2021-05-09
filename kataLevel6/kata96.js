// An example of null value assignment
let variableOne = null;

// An example of a function returning undefined and its value being assigned to a variable
const variableTwo = ['hello', NaN, null].find(x => x === Number(x));

const evaluateNullOnly = (example) => {
  if (example === null) {
    return 'The value is null';
  } else {
    return `'${example}' is not null`;
  }
};

const evaluateNullOrUndefined = (example) => {
  if (example == null) {
    return 'The value is null or undefined';
  } else {
    return `'${example}' is not null or undefined`;
  }
};

// Outputs 'The value is null'
console.log(evaluateNullOnly(variableOne));

// Outputs `'undefined' is not null`
console.log(evaluateNullOnly(variableTwo));

// Outputs 'The value is null or undefined'
console.log(evaluateNullOrUndefined(variableOne));

// Outputs 'The value is null or undefined'
console.log(evaluateNullOrUndefined(variableTwo));