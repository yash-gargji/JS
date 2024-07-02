const user = {
    username: 'hitesh',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
      // console.log("Got user details")
      // console.log(`Username : ${this.username}`)
      console.log(this)
    }

}
// console.log(user.getUserDetails());

// console.log(this)

// like if we see this this is referring global object 
// so it will give a emoty object 
// but if we print this in browser it will give window object
// because browser is running on widnow object and there are sevral things

// const promiseOne = new Promise()
// const date = new Date()

// let username;
// let loginCount;
// let isLoggedIn;

// this new is for creating new context and aslo known as constructor

function User(username,loginCount,isLoggedIn){
       this.username = username
       this.loginCount = loginCount;
       this.isLoggedIn = isLoggedIn

       this.greetirngs = function(){
          console.log(`Welcome ${this.username}`);
       }

       return this

       // this wll alwyas return directly
}

// const userOne = User("hitesh",12,true)
// console.log(userOne);

const userOne = new User("hitesh",12,true);
console.log(userOne);
const usertwo = new User("ChaiAurCode",12,true);
console.log(usertwo.constructor);


