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