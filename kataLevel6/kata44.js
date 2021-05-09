function kebabize(str) {
  return str
    .replace(/[^a-z]/gi, "")
    .replace(/(\b[a-z])/i, ($1) => {
      return `${$1.toLowerCase()}`;
    })
    .replace(/([A-Z])/g, ($1) => {
      return `-${$1.toLowerCase()}`;
    });
}

console.log(kebabize("9ET"));
