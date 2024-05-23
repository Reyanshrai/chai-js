const marvel_hearos = ["thor",'ironman']

const dc_heros = ['superman','flash','batman']

// marvel_hearos.push(dc_heros);

// console.log(marvel_hearos)

// let add = marvel_hearos.concat(dc_heros); 

// concat gives new array so store new varibale and then show output

// console.log(add);

const all_heroes = [...marvel_hearos,...dc_heros]

console.log(all_heroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity);

console.log(real_another_array)


console.log(Array.isArray("Reyansh"));
console.log(Array.from("Reyansh"));
console.log(Array.from({name : "Reyansh"})); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));


