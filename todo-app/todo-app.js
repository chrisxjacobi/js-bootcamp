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

// listen for change in filter
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit' , function(e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    })

    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})






// create a form with single input for todo text
// setup a submit handler and cancel default action
// add a new item to todos array with that text
// rerender the app
// clear the input field value







// const paras = document.querySelectorAll('p')

// paras.forEach(function (p) {
//     if (p.textContent.includes('eat')) {
//         p.remove()
//     }

// })


// `you have __ todos left` (p element)
// print p for each todo (use text of obj as text)