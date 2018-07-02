const account = {
  name: 'Chris J',
  expenses: [],
  income: [],
  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount
    })
  },
  addIncome: function (description, amount) {
    this.income.push({
      description: description,
      amount: amount
    })
  },
  getAccountSummary: function () {
    let totalExpenses = 0
    let totalIncome = 0
    let balance;

    this.expenses.forEach(function (expense) {
      totalExpenses = totalExpenses + expense.amount
    })

    this.income.forEach(function (income) {
      totalIncome = totalIncome + income.amount
    })

    balance = totalIncome - totalExpenses

    return `${this.name} has a balance of $${balance}. This includes $${totalExpenses} in expenses and $${totalIncome} in income.`
  }
}


account.addExpense('Rent', 950)
account.addExpense('coffee', 2)
account.addIncome('job', 1000)
console.log(account.getAccountSummary());











































// const account = {
//     name: 'Chris',
//     expenses: [],
//     income: [],
//     addExpense: function (description, amount) {
//         this.expenses.push({
//             description: description,
//             amount: amount
//         })
//     },
//     addIncome: function (description, amount) {
//         this.income.push({
//             description: description,
//             amount: amount
//         })
//     },
//     getAccountSummary: function () {
//         let totalExpenses = 0
//         let totalIncome = 0
//         let balance = 0
//
//         this.expenses.forEach(function(expense) {
//             totalExpenses = totalExpenses + expense.amount
//         })
//         this.income.forEach(function(income) {
//             totalIncome = totalIncome + income.amount
//         })
//
//         balance = totalIncome - totalExpenses
//
//         return `${this.name} has $${totalIncome} in income and $${totalExpenses} in expenses, for a balance of $${balance}.`
//     }
// }
//
// account.addExpense('rent', 950)
// account.addExpense('Coffee', 2)
// account.addIncome('job', 1000)
//
// console.log(account.getAccountSummary());
//
// // PT 2
// // add income array to account
// // setup add income method (description, amount)
// // tweak getAccountSummary
//
// // PT 1
// // expense -> desc, amount
// // addExpense - desc, amount
// // getAccountSummary - total up all expenses 'Chris has $ in expenses (forEach through all in array)
