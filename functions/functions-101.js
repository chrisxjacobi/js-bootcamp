// function - input, code, output (return value)

let greetUser = function () {
    console.log('Welcome, user!');
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
   let result = num * num
   return result
}

let value = square(3)
let otherValue = square(10)

console.log(value);
console.log(otherValue);

// challenge area //

// convertFahrenheitToCelsius
// call a few Times (32 -> 0, 68 -> 20)
// print converted values

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * (5 / 9);
    return celsius
}

let celsiusOne = convertFahrenheitToCelsius(32)
let celsiusTwo = convertFahrenheitToCelsius(68)

console.log(celsiusOne);
console.log(celsiusTwo);
