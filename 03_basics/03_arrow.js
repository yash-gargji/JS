const user = {
    username: "hietsh",
    price: 999,

    welcomeMessage: function(){
      console.log(`${this.username}, welcome to website`);
    //   console.log(this);
    }
    // this will refer to current context

}

// user.welcomeMessage()

// user.username = "Sam"

// console.log(user.welcomeMessage());

   console.log(this);
   // this will refer to empty object

   // but in browser window is global object so this will refer to window

//    function chai(){
//     let username = "hitesh"
//        console.log(this)
//    }

//    chai()

const chai = () => {
        let username = "hitesh"
        console.log(this)
        // in this this will point to empty object 
}


// chai()

// const addTwo = (num1,num2) =>{
//      return num1 + num2;
// }
// console.log(addTwo(3,4));

//  const addTwo = (num1,num2) => num1 + num2

//  const addTwo = (num1,num2) => (num1 + num2) 
 // in this no need to use return 
 // this is implicit return 

 const addTwo = (num1,num2) => ({username: "hitesh"})
 // for returning object we will use parantheisis
 

console.log(addTwo(3,4));

