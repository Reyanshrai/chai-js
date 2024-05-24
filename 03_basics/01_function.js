function name(){
    console.log("Reyansh");
}

// name()

// function twoAddNumber(num1,num2){
    
//     console.log(num1+num2)
// }

function twoAddNumber(num1,num2){
    // let result = num1+num2;
    // return result;

    return num1 + num2;
}

const number = twoAddNumber(2,3)
// twoAddNumber(2,"3")
// twoAddNumber(2,"a")
// twoAddNumber(2,null)

// console.log(number)
// console.log(typeof number);


function loginUserMessage(username="rey"){
    if(!username){
        console.log("Please enter username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Reyansh"))
// console.log(loginUserMessage())
// console.log(loginUserMessage("REyansh"))

// ... num1 is rest operator or create array 
// ... rest or spread 

// function calculateCartPrice(...num1){
//     return num1
// }

function calculateCartPrice(val , val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,300,300,500,400));

const user = {
    username : "reyannsh",
    price : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);

handleObject({
    username: "Rey",
    price : 200
})

const mynewArr = [200,400,100]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log("first value",returnSecondValue(mynewArr));

console.log("second value",returnSecondValue([200,100,300,400]));