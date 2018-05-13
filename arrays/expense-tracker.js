const account = {
    name: 'Chris',
    expenses: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0

        this.expenses.forEach(function(expense) {
            totalExpenses = totalExpenses + expense.amount
        })

        return `${this.name} has $${totalExpenses} in expenses.`
        //return `${this.name} has `
    }
}

// expense -> desc, amount
// addExpense - desc, amount
// getAccountSummary - total up all expenses 'Chris has $ in expenses (forEach through all in array)
 

account.addExpense('rent', 950)
account.addExpense('Coffee', 2)
console.log(account.getAccountSummary());
