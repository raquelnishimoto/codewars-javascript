function list(names) {
  let formattedNames = [];
  names.forEach((name, index) => {
    if (index === 0) {
      formattedNames.push(name['name']);
    } else if (index === (names.length - 1)) {
      formattedNames.push(' & ' + name['name']);
    } else {
      formattedNames.push(', ' + name['name']);
    }
  });
  formattedNames.join('');
}

list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]);
list([{name: 'Bart'},{name: 'Lisa'}]);
list([{name: 'Bart'}]);
