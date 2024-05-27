const name = "yash"
const repoCount = 50

// console.log(name + repoCount + " value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('yashcq-c-com')

console.log(gameName[0]);
// console.log(gameName.__proto__)
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('c'));

const newString = gameName.substring(0,3);

console.log(newString)

const anotherString = gameName.slice(-1,3)

console.log(anotherString);

const s = "    yash     "
console.log(s);
console.log(s.trim());

let url = "https://hitesh.com/hitesh%20choudhary"
// browser replaces white spaces with %20

url = url.replace('%20','-')

let flag = url.includes('hitesh')

console.log(flag)
console.log(gameName.split('-'))
  
console.log(gameName.charAt(5));

