let name = '    Chris Jacobi   '
console.log(name.length);

console.log(name.toUpperCase());

console.log(name.toLowerCase());

let password = '394huitrge09food89ui3re'
console.log(password.includes('food'))

console.log(name.trim());


let isValidPassword = function (str) {
  return str.length > 8 && !str.includes('password')
}

console.log(isValidPassword('coolio'));
console.log(isValidPassword('huinj49f8ijo34'));
console.log(isValidPassword('password'));
console.log(isValidPassword('jj'));
console.log(isValidPassword('jjy8hiunj4reguijpassword7huij4reg'));




// let name = '    Chris Jacobi      '
//
// // length property
// console.log(name.length);
//
// // convert to uppercase
// console.log(name.toUpperCase());
//
// // convert to lowercase
// console.log(name.toLowerCase());
//
// // includes
// let password = 'abc12323r098'
// console.log(password.includes('password'));
//
// // trim
// console.log(name.trim());
//
// // challenge area - length more than 8, does not contain 'password'
//
// let isValidPassword = function (pw) {
//     return pw.length > 8 && !pw.includes('password')
// }
//
// console.log(isValidPassword('asft'));
// console.log(isValidPassword('sdfunjf238!@#REFW'));
// console.log(isValidPassword('sdfunjf23password8!@#REFW'));
