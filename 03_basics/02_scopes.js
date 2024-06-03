// var c = 300
// let a = 300

// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
//     console.log(a);
//     // this will print 10
// }

// this will be the block scope 

// outside of a block will be the global scope

// console.log(a);
// console.log(b);
// console.log(c);

// var will be the culprit and it will print 
// console enviroment in the browser will have differnt global scope and 
// the code environment through node will be differnt 


function one(){
     const username = "hitesh"

     function two(){
        const website = "youtube"
        console.log(username);
     }
    // console.log(website);

    // this will not be accessed

    // two()
    // if not called then will not be executed 

    // the baby function can acces the elements of the parent fucntion
    // the fucntion will be called in a new stack
}

// one()

if(true){
    const username = "hiesth"

    if(username === "hiesth"){
        const website = "youtube"
        // console.log(username + " " + website)
    }
    //console.log(website)
    // will give error
}

// console.log(username)
// will give errro

//++++++++++++++++++ interesting +++++++++++++++++

addone(5)

function addone(num){
     return num + 1
}


const addTwo = function(num){
    return num + 2
}
// this is also known as expression

addTwo(5)

// the addtwo fucntion can be only called after the declaration 
// as this is stored in varaible 

// but the normal fucntion can be called before its declaration