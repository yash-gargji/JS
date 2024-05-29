// singleton 

// object literals 

const mySym = Symbol("key1")

const js_user = {
    name: "Yash",
    // the name key will be procesed as a string 
    age: 20,
    location: "Jaipur",
    "full name": "Yash Garg",
    // this will be only accesed as a key value not with the dot value
    // mySym: "mykey1",
    // this is not declared as a symbol as of now
    [mySym]: "mykey1",
    email: "yash@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(js_user.email)
// console.log(js_user["email"])
// console.log(js_user["full name"])
// // console.log(typeof js_user.mySym)
// console.log(js_user[mySym])
// the values in the object will be accesed as key also

js_user.email = "yash123@gmail.com"

// Object.freeze(js_user)
// will not allow to change the value of the object

js_user.greeting = function(){
     console.log("Hello JS user")
}
js_user.greeting2 = function(){
     console.log(`Hello Js user , ${this.name}`)
}
console.log(js_user.greeting())
console.log(js_user.greeting2())