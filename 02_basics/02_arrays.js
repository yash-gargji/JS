const marvel_heroes = ["Thor" , "Iron man" ,"spiderman"]
const dc_heroes = ["sueprman" , "batman" , "flash"]

// marvel_heroes.push(dc_heroes)

// it will push a dc_heores in a marvel_heroes

// .toExponential. op:- [ 'Thor', 'Iron man', 'spiderman', [ 'sueprman', 'batman', 'flash' ] ]

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])

// const all_heroes = marvel_heroes.concat(dc_heroes)
// // will return a new array and a simple array type

// console.log(all_heroes);

// const all_heroes = [...marvel_heroes, ...dc_heroes];
// // will create a new array

// console.log(all_heroes)

// const new_array = [1,2,3,[4,5,6] , 7, [6,7,[4,5]]]

// const real_another_array = new_array.flat(Infinity)

// console.log(real_another_array)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hietsh"}))
// interesting 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))

