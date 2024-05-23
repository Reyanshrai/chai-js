// const tinderUser = new Object() this is singleton object 

//const tinderUser = {} this is not singleton object

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "pubby";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "reyanhs",
            lastname : "rai"
        }
    }

}

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1:"a",
    2:"b",
}

const obj2 = {
    3:"c",
    4:"d",
}

// const obj3 = {obj1,obj2};

// console.log(obj3);

//const obj3 = Object.assign(obj1,obj2);

 // const obj3 = {...obj1,...obj2};

// const obj3 = Object.assign({},obj1,obj2);

// console.log(obj3);

const uses = {
    id : 1,
    email:"us@gmail.com"
}

// uses[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor: "Reyansh"
}


//course.courseInstructor

const {courseInstructor: ins} = course

//console.log(courseInstructor);
console.log(ins);

// const navbar = ({company})=>{

// }

// navbar(company="reyanhs")

// json data form

// {
//     "name" : "Reyansh",
//     "coursename" : "js in hindi"
// }

// json data array form structure

// [
//     {},
//     {}
// ]

