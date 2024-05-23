// singleton , if we are difine object through literals so dont make singleton 


// object literals

//object.create  create emethod

const mySym = Symbol('key1')
 
const Jsuser = {
    name:"Reyansh",
    "full name":"REyansh ",
    age:18,
    location : "Bihar",
    email:"rey@gmil.com",
    isLoggedIn : false,
    lastLoginDay :["monday",'saturday'],
    [mySym] : "mykey1"
}

// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"])
// console.log(Jsuser.full name) not use

// console.log(Jsuser[mySym])
// console.log( typeof Jsuser[mySym])

// Jsuser.email = "rey@gpt.com";
// Object.freeze(Jsuser)
// Jsuser.email = "rey@gmail.com"
// console.log(Jsuser)

Jsuser.greeting = function(){
    console.log("Hello js user");

}

Jsuser.greetingTwo = function(){
    console.log(`Hello js user , ${this.name}`);

}

console.log(Jsuser.greeting())
console.log(Jsuser.greetingTwo())

