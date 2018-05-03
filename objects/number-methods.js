let num = 893.34809023

console.log(num.toFixed(2));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

let min = 10
let max = 20

let randomNum = Math.floor(Math.random() * (max - min)) + min
console.log(randomNum);

// challenge area  - fn takes in guess, random between 1 - 5, T/F

let rand = Math.floor(Math.random() * 5) + 1
//console.log(rand);

let makeGuess = function (guess) {
    return guess === rand
}

console.log(makeGuess(3));