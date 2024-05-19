// Dates

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,23);
// let myCreatedDate = new Date(2023,0,23,5,3);
let myCreatedDate = new Date("01-14-2023");

//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newdate = new Date();
// console.log(newdate)
// console.log(newdate.getDate())
// console.log(newdate.getTime())
// console.log(newdate.getSeconds())
// console.log(newdate.getMonth())
// console.log(newdate.getFullYear())
// console.log(newdate.getDay())

console.log(newdate.toLocaleString());

let local = newdate.toLocaleString('default',{
    weekday: "long",
    
})

console.log(local);



