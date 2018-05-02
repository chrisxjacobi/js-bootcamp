// multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result);

// default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
    
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText);

// challenge area, getTip()
// total, tipPercentage, 'A 25% tip on 40$ would be: '

let getTip = function (bill, tipPercentage = .1) {
    let percent  = tipPercentage * 100
    let tip = bill * tipPercentage
    let total = bill + (bill * tipPercentage);
   // return `Bill: $${bill}, Tip: $${bill * tipPercentage}, Total: $${total}.`
    return `A ${percent}% tip on $${bill} would be $${tip}`
    
}

let totalBill = getTip(50)
console.log(totalBill);


