const todos = [{
    text: 'eat dinner',
    completed: false
}, {
    text: 'walk the dog',
    completed: false
}, {
    text: 'go to gym',
    completed: true
}, {
    text: 'kiss bb',
    completed: false
}, {
    text: 'pet sunny',
    completed: true
}]

// const paras = document.querySelectorAll('p')

// paras.forEach(function (p) {
//     if (p.textContent.includes('eat')) {
//         p.remove()
//     }

// })

// `you have __ todos left` (p element)
// print p for each todo (use text of obj as text)

const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

console.log(incompleteTodos);

const summary = document.createElement('p');
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})



// const summary = document.createElement('p')
// summary.textContent = `You have ${incompleteTodos.length} todos left!`
// document.querySelector('body').appendChild(summary)

// todos.forEach(function (todo) {
//     const p = document.createElement('p')
//     p.textContent = todo.text
//     document.querySelector('body').appendChild(p)
// })




// const getThingsToDo = function (todos) {
//     return todos.filter(function (todo) {
//         return !todo.completed
//     })
// }
// // Will print an array of all todos that still need to be completed
// console.log(getThingsToDo(todos))





