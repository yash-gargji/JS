// const tinder = new Object()

const tinder = {}

tinder.id = "123abc"
tinder.name = "Samy"
tinder.isLoggedIn = false;

//console.log(tinder)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullnme: {
            firstname: "yash",
            lastname: "garg"
        }
    }
}
console.log(regularUser.fullname?.userfullnme);

// ? will execute only when the value exists

const obj1 = {
 1: "a", 
 2: "b"
}
const obj2 = {
    3: "c", 
    4: "d"
 }

//    const obj3 = {obj1 , obj2}
//    console.log(obj3)

// const obj3 =  Object.assign({},obj1,obj2)
// {} means that it is the target in this the first parameter will be target and other will be source 
// so empty object defines that it is the target

const obj3 = {...obj1,...obj2}
// console.log(obj3)

const users = [
    {
        id:1,
        email: "y@gmail.com"
    },
    {
        id:1,
        email: "y@gmail.com"
    },
    {
        id:1,
        email: "y@gmail.com"
    },
]
console.log(Object.keys(tinder)) // important 
console.log(Object.values(tinder)) // important 
console.log(Object.entries(tinder)) // important 

console.log(tinder.hasOwnProperty('isLoggedIn'))
// used for determining a property exists in a object or not 