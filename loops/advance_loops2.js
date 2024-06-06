// for in

const myObject = {
    js: "javascript",
    cpp: "ruby",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
     console.log(myObject[key])// this will give the values of the key 
     console.log(`${key}shortcut is for ${myObject[key]}`);
}

const progRAMMING = ["JS", "rb", "py" , "java", "cpp"]

for (const key in progRAMMING) {
     console.log(key) //this will be the index 
  console.log(progRAMMING[key]); // this will give value 
}

// we cannot apply this on maps because this is not iterable