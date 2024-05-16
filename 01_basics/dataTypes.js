// primitive

// 7 types : String,Number,Boolean ,Null,undefined,symbole,BigInt

// const id = Symbol('123');
// const anid = Symbol('123');

// console.log(id===anid);


// // Reference type (Non Primitive)  : Array,Objects,Functions


// const heros = ["shaktiman","naagraj",'doga'];

// let ob={
//     name :"Reyanhs",
//     age :22,
// }


// const myfunction = function(){
//     console.log("Hello World");
// }

// console.log(myfunction);

// console.log(typeof null)



// stack(primitive) ,Heap(non-primitive) memory

let myYoutuvename = "Reyansh";

let anotherName = myYoutuvename;

anotherName = "chai aur js"

console.log(anotherName);
console.log(myYoutuvename);


let userOne={
    email:'user@gmail.com',
    upi:"user@ybl"
}

let userTwo=userOne;

// console.log(userTwo)

userTwo.email = "reyanhs@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);