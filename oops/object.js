function multiply(num){
     return num*5
}
multiply.power = 2;

console.log(multiply(5));
console.log(multiply.power);
console.log(multiply.prototype);

// the function is also a object and a fucntion 
// this is due to prototype inheritence

function createUser(Username,score){
    this.Username = Username
    this.score = score
}

createUser.prototype.increment = function(){
     this.score++;
}
createUser.prototype.printMe = function(){
     console.log(`score is ${this.score}`);
}

const chai  = new createUser("chai",25)
const tea  = new createUser("tea",250)

// without new it will throw a error because the properties are not injected

chai.printMe()
