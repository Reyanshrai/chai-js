// for of

// ['','','']
// [{},{},{}]

// const arr = [1,2,3,4,5,6]

// for (const num of arr) {
//     console.log(num);
// }

// const greeting = "hello world"

// for(const greet of greeting){
//     if(greet ==' '){
//         continue
//     }
//     console.log('each char is ',greet)
// }

// Maps

// const map = new Map()
// map.set('IN','India')
// map.set('usa','united state of  america')
// map.set('IN','India')

// console.log(map);

// for(const [key,value] of map){
//     console.log(key,':-',value)
// }

// const myObject = {
//     'game1':'nfs',
//     'game2':'ff'
// }
// for of loop not iterable object

// for(const [key,value] of myObject){
//     console.log(key,value)
// }


// const myObject = {
//     js:'javascript',
//     cpp :'c++',
//     rb:'ruby'
// }

// for (const key in myObject){
//     console.log(key,myObject[key])
// }

// for in loop gives key means index  

const arr = [1,2,3,4,5]

for(const num in arr){
    console.log(arr[num])
}