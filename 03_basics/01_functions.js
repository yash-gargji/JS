function sayMyName(){
    console.log('Hello world')
}

//sayMyName // this is refrence 

sayMyName() // this is execute


// function add(number1, number2){
//     console.log(number1 + number2)
// }
// this will not return any thing

// const result = add(3,5) // this is not returning 

// console.log("Result",result) // result will be undefined 

// function add(number1, number2){
//      let result = number1 + number2
//      return result
//      // return number1 + number2
// }

function loginuserMessage(username = "sam" /* for a const value*/){
    if(!username){
       console.log("Please enter a username")
       return 
    }
     return `${username} just logged in`
}

// console.log(loginuserMessage("hitesh"))
// console.log(loginuserMessage())
// this will give undefined logged in

function calculateCartPrice(val1,val2, ...num1){
      return num1
}

// console.log(calculateCartPrice(200,49,423,500))

const user = {
    username: " hietsh",
    pricea: 199
}

function handleObject(anyObject){
      console.log(`Username is${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    username: " Sam",
    price: 399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))

console.log([200,400,46346])
