const descriptor = Object.getOwnPropertyDescriptor(Math , "PI")

// console.log(Math.PI); // seemed t be a constant but not true

// console.log(descriptor);

const chai = {
    name:'gingerchai',
    price: 250,
    isAvailable: true,
    func: function(){
        console.log('chai nahi bani');
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai, 'name',{
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// for (let [key,value] of chai) {
//       console.log(` ${key} , ${val}`);
//       // will give error
// }

for (let [key,value] of Object.entries(chai)) {
      if(typeof value !== 'function'){
      console.log(` ${key} , ${value}`);

      }
      // will give error when only passed a direct instance of chai 

      // if a check is not applied then it will also give fucntion and // we dont want it .
}

// now i will close enumeration for name property

Object.defineProperty(chai, 'name',{
    writable: false,
    enumerable: false
})

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
    console.log(` ${key} , ${value}`);

    }
    // will give error when only passed a direct instance of chai 

    // if a check is not applied then it will also give fucntion and // we dont want it .
}

