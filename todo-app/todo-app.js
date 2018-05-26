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
}];

// setup a div for todos
// create filters (searchText) and wire up a new filter input to change it
// create renderTodos function to redner and rerender latest filtered data, clear div

const filters = {
    searchText: ' '
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h4');
    summary.textContent = `You have ${incompleteTodos.length} todos left!`;
    document.querySelector('#todos').appendChild(summary);


    filteredTodos.forEach(function (todo) {
        const todoEl = document.createElement('p');
        todoEl.textContent = todo.text;
        document.querySelector('#todos').appendChild(todoEl);
    });
}

renderTodos(todos, filters)

// listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function () {
    console.log('add a new todo!')
})

// listen for todo text change
document.querySelector('#new-todo-text').addEventListener('input', function (e) {
    console.log(e.target.value)
})

// listen for change in filte
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})






// const paras = document.querySelectorAll('p')

// paras.forEach(function (p) {
//     if (p.textContent.includes('eat')) {
//         p.remove()
//     }

// })


// `you have __ todos left` (p element)
// print p for each todo (use text of obj as text)