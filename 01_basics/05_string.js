const name = "reyansh";
const repoAccount = 50

// console.log(name+repoAccount);let add = name + repoAccount;
// console.log(add);

// console.log(`Hello my name is ${name} and my repo${repoAccount}`)

// const gameName = new String("Reyansh")

// console.log(typeof gameName);

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length);

// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());

// console.log(gameName);

// console.log(gameName.charAt(2));

// console.log(gameName.indexOf('R'));


let user = "Reyanhs-Rai"

let newString= user.substring(0,4);

// substring not exists negative value

console.log(newString)

const anotherString = user.slice(-8,4);

console.log(anotherString);


const newStringOne = "    reyanhs   ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://reyansh.com/reyansh%20rai";

console.log(url.replace('%20','-'));


console.log(url.includes("reyansh"));


console.log(user.split('_'));
