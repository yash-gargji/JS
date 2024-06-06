// for of
// these are array specific loops 


// const arr = [1 , 2 , 3 , 4 ,5]

// for (const num of arr) {
//      console.log(num);
// }

// const greetings = "Hello World"

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }

// Maps // like in cpp

const map = new Map()
map.set('IN',"India")
map.set('USA','United States Of America')

for (const [key,value] of map) {
     console.log(key)
}

const myobj = {
     'game1': 'NFS',
     'game2': 'SpiderMan'
}
// we cannot iterate objects like this 
// for (const [key,value] of object) {
    
// }