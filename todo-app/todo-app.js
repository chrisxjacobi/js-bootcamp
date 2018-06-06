// delete dummy data
// read and parse data when app starts up
// stringify and write the data when new data is added

let todos = [];

const filters = {
    searchText: ' ',
    hideCompleted: false
}

const todoJSON = localStorage.getItem('todos')

if (todoJSON !== null) {
  todos = JSON.parse(todoJSON)
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
    localStorage.setItem('todos', JSON.stringify(todos))
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})

// hide completed todos via checked box
document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})
