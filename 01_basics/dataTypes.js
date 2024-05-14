// primitive

// 7 types : String,Number,Boolean ,Null,undefined,symbole,BigInt

const id = Symbol('123');
const anid = Symbol('123');

console.log(id===anid);


// Reference type (Non Primitive)  : Array,Objects,Functions


const heros = ["shaktiman","naagraj",'doga'];

let ob={
    name :"Reyanhs",
    age :22,
}


const myfunction = function(){
    console.log("Hello World");
}

console.log(myfunction);

console.log(typeof null)