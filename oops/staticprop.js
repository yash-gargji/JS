class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username ${this.username}`);
    }

   static createId(){
        return `123`
    }
    // by static you cannot use this property
}

class Teacher extends User{
      constructor(username,email){
         super(username)
         this.email = email
      }
}
const hitesh = new User("hitesh");

const iphone = new Teacher("iphone","ipphone@google.com");

iphone.logMe()

console.log(iphone.createId()); // will give error you cannot use this even in child
