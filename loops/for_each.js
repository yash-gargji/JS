// for each
// this is higher order function

const coding = ["js", "ruby" , "java", "python"] 

// coding.forEach( function (item) {
//      console.log(item)
// } )

// anotehr way

// coding.forEach( (item) => {
//     console.log(item)
// })


function printme(item){
     console.log(item);
}

coding.forEach(printme)
// only refrence is passed 

// coding.forEach( (item,index,arr) => {
//         console.log(item,index,arr)
// // } )

const myCoding = [
    {
        languageName: "javaScript",
        fileName: "js"
    },
    {
        languageName: "java",
        fileName: "java"
    },
    {
        languageName: "python",
        fileName: "py"
    }
]

myCoding.forEach( (item) =>{
     console.log(item.languageName);
})