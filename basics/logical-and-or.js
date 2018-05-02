let temp = 180

// logical and operator, if both sides are true (fals otherwise)

if (temp >= 60 && temp <= 90) {
    console.log('Its pretty nice out');
} else if (temp <= 0 || temp >= 120) {
    console.log('do not go outside');
} else {
    console.log('do what you want');
}


// challenge area

let isGuestOneVegan = true
let isGuestTwoVegan = false

// are both vegan, log only vegan
// if one vegan, long some options
// if neither, meat only!

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('we offer vegan food');
    
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('we offer many things, some vegan');
    
} else {
    console.log('Meat only options!');
    
}
