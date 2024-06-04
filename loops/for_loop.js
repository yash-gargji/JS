// for

// for(let i = 0;i<10;i++){
//      console.log(i);
//      if(i === 5){
//         console.log("5 is bet number")
//      }
//      // all elements are accesible  in this scope only 
// }

// for (let i = 1 ; i <= 10; i++) {
//     console.log(`Ouer loop value: ${i}`);
//     for (let j = 1; j <=10; j++) {
//         // console.log(`inner loop value ${j} and oueter loop ${i}`);
//         console.log(i + '*' + j + ' = ' + i*j);
//     }
// }

let myArray = ["flash","batman","Superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    // if we go out of bound then it will give undefined not errors
}

//  break and continue

//  like the cpp aur norml 