// if

const isUserLoggedIn = true
const temprature = 41


if(isUserLoggedIn){ 
   // the condition must be true to execute inner code 
}

// < , > , <= , >= , == != , === (in this the type is also checked)
 
// if(2 == "2"){
//       console.log("execited");
// }
// else{
//     console.log("dD"); 
// }

// if(2 === "2"){
//         console.log("sdas");
// }

// const score = 200

// if(score > 100){
//      const power = "fly"
//      console.log(`user power: ${power}`);
//     //   the power variable will be inside this scope
// }

// const balance = 1000;

// if(balance > 500) console.log("test");
// if(balance > 500) console.log("test"), console.log("test2");
// // , is applied for two lines but not preferrable

// if(balance < 500){
//       console.log("Less than");
// }
// else if(balance < 750){
//       console.log("less than 750")
// }
// else if(balance < 900){
//      console.log("less than 900")
// }
// else {
//      console.log("facv");
//}

const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(isUserLoggedIn && debitCard && 2 === 2){
    console.log("allow to buy courses");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}

// Nulish Coalescin Operator (??):null undefined

let val1;
val1 = 5 ?? 10 // 5

val1 = null ?? 10 // 10

val1 = undefined ?? 15 //15

val1 = null ?? 10 ?? 10 // 10

console.log(val1)

//ternary operator

// condition ? true: false

val1 < 20 ? console.log(`true given`) : console.log(`value given fase`)



