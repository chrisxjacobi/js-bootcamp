// additional conditional statements plus and/or operators,
// scoping, basic functions/undefined/null
// 

let isAccountLocked = false
let userRole = 'user'


if (isAccountLocked) {
    console.log('Is account locked');
} else if (userRole === 'admin') {
    console.log('Welcome admin');

} else {
    console.log('Welcome');
}

// challenge area

let temp = 45

// it is freezing outside
// its hot outside
// go for it, it is pretty nice

if (temp <= 32) {
    console.log('it is freezing outside');

} else if (temp >= 90) {
    console.log('its way too hot');

} else {
    console.log('go for it, it is nice outside');

}