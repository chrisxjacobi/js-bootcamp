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

const filters = {
    searchText: ' ',
    hideCompleted: false
}

const renderTodos = function (todos, filters) {

    let filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    filteredTodos = filteredTodos.filter(function (todo) {
        if (filters.hideCompleted) {
            return !todo.completed
        } else {
            return true
        }
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

// listen for change in filter
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// add new todo via form submission
document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    })

    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})

// hide completed todos via checked box
document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})



// filteredTodos = filteredTodos.filter(function (todo) {
    //     return !filters.hideCompleted || !todo.completed
    // })

//filteredTodos = filteredTodos.filter(function (todo) {
    //     if (filters.hideCompleted) {
    //         return !todo.completed
    //     } else {
    //         return true
    //     }
    // })



// const paras = document.querySelectorAll('p')

// paras.forEach(function (p) {
//     if (p.textContent.includes('eat')) {
//         p.remove()
//     }

// })


// `you have __ todos left` (p element)
// print p for each todo (use text of obj as text)