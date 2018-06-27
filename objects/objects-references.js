let myAccount = {
  name: 'MY MONEY',
  expenses: 0,
  income: 0
}

// let otherAccount = myAccount
// otherAccount.income = 1000
//

// addExpense(myAccount, 2.50)
// console.log(myAccount);

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount
}

let addIncome = function (account, amount) {
  account.income = account.income + amount
}

let resetAccount = function (account) {
  account.expenses = 0
  account.income = 0
}

let getAccountSummary = function (account) {
  let balance = account.income - account.expenses

  return `The account named ${account.name} has $${balance}, including $${account.expenses} in expenses and $${account.income} in income.`
}

addIncome(myAccount, 1000)
addExpense(myAccount, 75)
addExpense(myAccount, 55)
console.log(getAccountSummary(myAccount));
resetAccount(myAccount)
console.log(getAccountSummary(myAccount));



// let myAccount = {
//     name: 'Chris J',
//     expenses: 0,
//     income: 0
// }
//
// let otherAccount = myAccount;
// otherAccount = {}
//
// let addExpense = function (account, amount) {
//     account.expenses = account.expenses + amount
//     console.log(account);
// }
//
// // addExpense(myAccount, 2.50)
// // console.log(myAccount);
//
// // addIncome (account, amount)
// // resetAccount (account, amount to zero)
// // getAccountSummary (print account name and balance with expenses and income with return statement)
//
// let addIncome = function (account, income) {
//     account.income = account.income + income
// }
//
// let resetAccount = function (account) {
//     account.expenses = 0
//     account.income = 0
// }
//
// let getAccountSummary = function (account) {
//     let balance = account.income - account.expenses
//     return `Account for ${account.name} has a balance of $${balance}. $${account.income} in income, and $${account.expenses} in expenses.`
// }
//
// addIncome(myAccount, 2000)
// addExpense(myAccount, 2.50)
// addExpense(myAccount, 160)
//
// console.log(getAccountSummary(myAccount));
// resetAccount(myAccount);
// console.log(getAccountSummary(myAccount));
//
//
// // let  statement = getAccountSummary(myAccount);
//
// // console.log(`The ${statement.name} account has an income of ${statement.income} and expenses of ${statement.expenses} to leave a balance of ${statement.income - statement.expenses}`);
//
//
//
//
//
//
