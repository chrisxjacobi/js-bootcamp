let num = 79234.23948

console.log(num.toFixed(2));

// console.log(Math.round(num))
// console.log(Math.floor(num))
// console.log(Math.ceil(num))


let min = 0
let max = 1
let random = Math.floor(Math.random() * (max - min + 1)) + min
console.log(random);


let makeGuess = function (num) {
  let max = 5
  let min = 1

  let rand = Math.floor(Math.random() * (max - min +1)) + min

  return rand === num

}

console.log(makeGuess(3));




// let num = 893.34809023
//
// console.log(num.toFixed(2));
//
// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
//
// let min = 10
// let max = 20
//
// let randomNum = Math.floor(Math.random() * (max - min)) + min
// console.log(randomNum);
//
// // challenge area  - fn takes in guess, random between 1 - 5, T/F
//
// let rand = Math.floor(Math.random() * 5) + 1
// //console.log(rand);
//
// let makeGuess = function (guess) {
//     return guess === rand
// }
//
// console.log(makeGuess(3));
