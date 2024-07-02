// ES6 

class User {
    constructor(username,email,pasword){
         this.username = username;
         this.email = email;
         this.password = pasword;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }
    changeUsername(){
         return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// Behind the scene 

function user(username,email,password){
    this.username = username;
    this.email = email;
    this.password = pasword;
}

user.prototype.encryptPassword = function(){
     return `${this.password}abc`;
}