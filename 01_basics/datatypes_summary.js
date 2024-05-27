// # Primitive
// They are calll by value
// 7 types : string ,Number , boolean , null,
// undefined , symbol, BigInt

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id == anotherId)

const num = 2211444423423312n

// refrence type (Non-primitive)

// Array , Objects , functions

const heroes = ["Shaktiman" , "nagraj" , "dogra"]
let myObj = {
    // for object
    name: "hitesh",
    age: 22,
}

const myfunction = function(){
    console.log("Hello world");
}
// all the non primitive hava data type of funcion
// fucntion has object fucntion return type
console.log(typeof myObj)

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive),Heap (Non- Primitive) 

let myYoutubeName = "Hitesh Choudhary"

let anotherName = myYoutubeName

anotherName = "chaiaurcode"
console.log(anotherName)

let user = {
    email: "user@google.com",
    upi: "@ybl"
}

let userTwo = user;

userTwo.email = "hitesh@google.com"

console.log(user.email + " " + userTwo.email)
