// array with five todos, you have X todoes, print the first and second to last items

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

const deleteTodo = function (todos, text) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === text.toLowerCase()
    })

    if (index > -1) {
        todos.splice(index, 1)
    }
}

// deleteTodo(todos, 'go to gym')
// console.log(todos);


const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return todo.completed === false
    })
}

console.log(getThingsToDo(todos));

// convert array to array of obj (text, completed), create function to remove by text value

// delete third item, add new item on end, remove first item
// todos.splice(2, 1)
// todos.push('pet sunny')
// todos.shift()

// console.log(`You have ${todos.length} todos!`);

// 1, first item, 2, second item, 3, third item

// todos.forEach(function (todo, index) {
//     let num = index + 1
//     console.log(`${index + 1}. ${todo}`);  
// })

// for (let count = 0; count < todos.length; count++) {
//     let num = count + 1
//     let todo = todos[count]
//     console.log(`${num}. ${todo}`);
// }