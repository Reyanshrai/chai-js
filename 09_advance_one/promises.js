// fetch('https://google.com').then().catch().finally()


// const promiseOne = new Promise(function(resolve,reject){
//     // Do and async task
//     // Db task , cryptography,network

//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log('Promise consumed')
// })

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('Async task is complete');
//         resolve()
//     },1000)
// }).then(()=>{
//     console.log('Async 2 resolved')
// })


// const promiseThree = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({username:'chai',email:'chai.com'})
//     },1000)
// })

// promiseThree.then((user)=>{
//     console.log(user)
// })


// const PromiseFour = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = false;
//         if(!error){
//             resolve({username:'reyansh',pass:'123'})
//         }else{
//             reject('Error : Something went wrong')
//         }
//     },1000)
// })

// PromiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username)
// }).catch((error)=>{
//     console.log('Error')
// }).finally(()=>{
//     console.log('the promise is either resolved or reject')
// })


// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = false
//         if(!error){
//             resolve({username:'Rey',pass:'123'})
//         }else{
//             reject('Error : JS went wrong')
//         }
//     },1000)
// });

// async function consumePromiseFive(){
//    try{
//     const response =  await promiseFive
//    console.log(response) 
//    }catch(error){
//     console.log(error)
//    }
// }
// consumePromiseFive()


//////////////////////


// async function getAllUser(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//     const data = await response.json()
//     console.log(data);
//     }catch(error){
//         console.log('error')
//     }
// }



// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users').then((respone)=>{
    return respone.json()
}).catch((err)=>{
    console.log(err)
}).then((data)=>{
    console.log(data)
})