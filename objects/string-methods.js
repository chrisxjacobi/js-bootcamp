let name = '    Chris Jacobi      '

// length property
console.log(name.length);

// convert to uppercase
console.log(name.toUpperCase());

// convert to lowercase
console.log(name.toLowerCase());

// includes
let password = 'abc12323r098'
console.log(password.includes('password'));

// trim
console.log(name.trim());

// challenge area - length more than 8, does not contain 'password'

let isValidPassword = function (pw) {
    return pw.length > 8 && !pw.includes('password')
}

console.log(isValidPassword('asft'));
console.log(isValidPassword('sdfunjf238!@#REFW'));
console.log(isValidPassword('sdfunjf23password8!@#REFW'));
