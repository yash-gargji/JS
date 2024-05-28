// Dates

let myDate  = new Date()
console.log(myDate.toDateString());
// Date is object

// let date = new Date(2023,9,30)
// let date = new Date(2023,9,30,5,3)

// let date = new Date("01-14-2023")

// console.log(date.toDateString());

// let myTimeStamp = Date.now()
// console.log(myDate.getTime())
// console.log(myTimeStamp)

// console.log(typeof Math.floor(Date.now()/1000));

let date = new Date();

// console.log(date.getDate())

date = date.toLocaleString('default',{
  weekday: "long",
})
console.log(date)