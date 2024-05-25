const user = {
    username : "Reyansh",
    price :99,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to my website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Rey"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "reyansh"
//     console.log(this);
// }

// chai()

// Arrow function 

const chai = ()=>{
    let username = "reyansh"
    console.log(this.username);
}

// chai()

// const addTwoNUm = (num1,num2)=>{
//     return num1+num2
// }

// const addTwoNUm = (num1,num2)=> num1+num2

const addTwoNUm = (num1,num2)=> ({username : "reyanhs"})


console.log(addTwoNUm(3,4));

// const myArr = [2,3,4,5,] 
// myArr.forEach()