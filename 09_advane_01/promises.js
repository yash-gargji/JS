const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB Calls , crptogrpahy
     // Network related callss

     setTimeout(function(){
         console.log('Async task is complete');
         resolve()
     },1000)
})
// then has a connection with resolve
promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject) {
      setTimeout(function(){
        console.log("Async task 2");
        resolve()
      },1000)
}).then(function(){
     console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve,reject){
       setTimeout(function(){
         resolve({username: "Chai", email: "yash.gargji2004@gmail.com"})
       },1000)
})
// mainly in resolve object is passed

promiseThree.then(function(user){
     console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
    let error = true;
    if (!error) {
         resolve({username: "Chai", email: "yash.gargji2004@gmail.com"})
    }
    else{
         reject('ERROR Somehing went wrong')
    }
    } ,1000)
})
 // in tis the value  returned by first then will be retrned this is known as chaining

promiseFour
.then((user) =>{
  console.log(user);
  return user.username;
})
.then((username) =>{
    console.log(username)
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected "))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
             resolve({username: "Chai", email: "yash.gargji2004@gmail.com"})
        }
        else{
             reject('ERROR Js went wrong')
        }
        } ,1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.