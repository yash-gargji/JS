function Setusername(username){
    // complex calculation
     this.username = username
}

function createUser(username,email,password){
    Setusername(username)
    // the function is  called here in a new execution context 
    // actually its parent refrence is still global execution context

    // for this
    Setusername.call(this,username)
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com","123")

console.log(chai);

// call basically pass current execution context to the child fucntion
// basically we pass a this and say ye jo tum apna this ha iski jagah mera this
// use karo
