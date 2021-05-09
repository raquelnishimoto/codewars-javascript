/*
Write a function that when given a URL as a string,
parses out just the domain name and returns it as a string.

assign url to domain and replace everything that is on the:
1. left of (including) www. or //
then on the domain
2. right of the dot
return the domain
*/

const domainName = (url) => {
  return url.replace(/.*(www\.|\/\/)/, '').replace(/\..*/, '');
};

console.log(domainName("http://github.com/carbonfive/raygun"));
// == "github"
console.log(domainName("http://www.zombie-bites.com"));
// == "zombie-bites"
console.log(domainName("https://www.cnet.com"));
// == "cnet"
console.log(domainName("http://google.com"));
//, "google")
console.log(domainName("http://google.co.jp"));
//, "google")
console.log(domainName("www.xakep.ru"));
//, "xakep")
console.log(domainName("https://youtube.com"));
//, "youtube")