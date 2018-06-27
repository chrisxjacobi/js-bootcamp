let bookOne = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

let bookTwo = {
  title: 'a peoples history',
  author: 'Howard Zinn',
  pageCount: 3723
}

let getSummary = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`
  }
}

let bookOneSummary = getSummary(bookOne)
let bookTwoSummary = getSummary(bookTwo)

console.log(bookOneSummary.pageCountSummary);


let convert = function (fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    celsius: (fahrenheit - 32) * (5/9),
    kelvin: (fahrenheit + 459.67) * (5/9)
  }
}

let conversion = convert(68)

console.log(conversion)









// let myBook = {
//     title: '1984',
//     author: 'George Orwell',
//     pageCount: 326
// }
//
// let otherBook = {
//     title: 'A Peoples History',
//     author: 'Howard Zinn',
//     pageCount: 723
// }
//
// let getSummary = function (book) {
//     return {
//         summary: `${book.title} by ${book.author}`,
//         pageCountSummary: `${book.title} is ${book.pageCount} pages long`
//     }
//
// }
//
// let bookSummary = getSummary(myBook)
// let otherBookSummary = getSummary(otherBook)
//
// console.log(bookSummary.pageCountSummary);
//
// // challenge area - function that takes fahrenheit, return obj with f, c, k
//
// var convertFtoCtoK = function (farenheit) {
//     return {
//         f: farenheit,
//         c: (farenheit - 32) * (5 / 9),
//         k: (farenheit + 459.67) * (5 / 9)
//     }
// }
//
// let conversion = convertFtoCtoK(65);
// console.log(`Farenheit: ${conversion.f}, Celsius: ${conversion.c}, Kelvin: ${conversion.k}`);
