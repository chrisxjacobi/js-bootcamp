// global scope (converFarenheittoCelsius, tempOne, tempTwo)
  // local scope (fahrenheit, celsius)
    // local scope (isFreezing)

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * (5 / 9);

    if (celsius <= 0) {
        let isFreezing = true
    }
    
    return celsius
}

let celsiusOne = convertFahrenheitToCelsius(32)
let celsiusTwo = convertFahrenheitToCelsius(68)

console.log(celsiusOne);
console.log(celsiusTwo);
