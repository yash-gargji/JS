// Immediately Invoked Function Expressions (IIFEE)

(function chai(){
    // nmaed iife
    console.log(`DB Connected`)
})();
// we will use semicolon to terminate this

// it will immediately executed
// weused this due to global scope pollution our varaibles get changed 

( (name) => {
     console.log(`DB connected2 ${name}`)
})('hitesh');

// this last paranthesis will invoke the  fucntion and can be used to pass perimiters