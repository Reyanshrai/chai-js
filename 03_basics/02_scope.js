

//{} this is scope
let a = 200;
var c =200
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

// console.log("salary", salary) give error

// let salary = 1000
// console.log("salary", salary)


function one(){
    const username = "Reyansh"

    function two(){
        const website = "Youtube"
        console.log(username);
        // console.log(website);
    }
    // console.log(website);

    two()
}

//one()

if(true){
    const username = "reyansh";
    if(username==="reyansh"){
        const website = "youtube";
        // console.log(website);
        // console.log(username + website);
    }
    // console.log(website)
}

// console.log(username)

//---------- interesting concept 

// console.log(addone(5)) this function is not give error because it can access and not hold any variable

function addone(num){
    return num+1
}


// console.log(addTwo(5)) its give error beacuse this function is hold in varible so cant acces before initilation or hoisting

const addTwo = function(num){
    return num+2
}
