let myName = "hitesh     "
console.log(myName.truelength);

// now i want to inject this fucntionality 

let myHeroes = ["Thor" ,"Spiderman"]

let heropower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
         console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log('hitesh is present in all object');
}
Array.prototype.heyhitesh = function(){
    console.log('hitesh says hello');
}
// heropower.hitesh()
myHeroes.hitesh()
myHeroes.heyhitesh()

// heropower.heyhitesh() // this doesnt have access to say heyhitesh

const user = {
    gmail: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeassignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// now modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUserName = "Chai aur code    "

String.prototype.truelength = function(){
     console.log(`${this}`)
     console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.truelength()
"yash".truelength()