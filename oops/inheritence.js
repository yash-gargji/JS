class User{
    constructor(username){
         this.username = username;
    }

    logMe(){
         console.log(`USERNME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
          super(username)
          this.email = email;
          this.password = password;
    }

    addCourse(){
        console.log(`a new course was added by ${this.username}`);
    }
}

const chai  = new Teacher("chai","chai@gmail.com", "123")

chai.addCourse()

const masalaChai = new User("masalachai")

// masalaChai.addCourse() // will give a error

masalaChai.logMe()

console.log(chai === masalaChai); // false

console.log(chai instanceof User); // true