// undefined is absence of value (for variable)
let name

name = 'michelle'

if (name === undefined) {
    console.log('please provide a name');
    
} else {
    console.log(name);
}

// undefined (for function arguments, as return default value)
let square = function (num) {
    console.log(num);
}

let result = square()
console.log(result);

// null as assigned value
let age = 27
age = null
console.log(age);
