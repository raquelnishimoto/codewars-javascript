/*
** Problem:
A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more capitals letters. 
The 1st letter of a code is the capital letter of the book category. In the bookseller's stocklist each code c is followed by a space 
and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

** Example:
b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B"]
res = "(A : 200) - (B : 1140)"

b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
c = ["A", "B", "C", "W"]
res = "(A : 0) - (B : 114) - (C : 70) - (W : 0)"

** Data:
input: two arguments of data type array
output: string

** Algorithm:
loop through the elements in the string, 
for each element get the char at index 0
and sum the substring from the char after the space to the end of the length of the string
Note: convert this substring to a number in order to sum it
push to an array the entries as (key : value) pair
push only the elements that match the letters in the second argument 
join elements in the array adding ' - '
*/

function stockList(listOfArt, listOfCat) {
  let bookQty = {};
  let listOfBookByQty = []
  
  if (listOfArt.length === 0) return '';
  listOfArt.forEach((str) => {
    let codeQty = bookQty[str.charAt(0)];
    if (codeQty) {
      codeQty += parseInt(str.slice(str.indexOf(' ')));
    } else {
      codeQty = parseInt(str.slice(str.indexOf(' ')));
    }
    bookQty[str.charAt(0)] = codeQty;
  });

  listOfBookByQty = listOfCat.map(category => {
    return `(${category} : ${bookQty[category] || 0})`;
  });

  return listOfBookByQty.join(' - ');
}

b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B"]
console.log(stockList(b, c));
d = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
e = ["A", "B", "C", "W"]
console.log(stockList(d, e))
f = [];
g = [ 'B', 'R', 'D', 'X' ];
console.log(stockList(f, g))