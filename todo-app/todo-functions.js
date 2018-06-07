// fetch existing todos from localStorage
const getSavedTodos = function () {
  const todoJSON = localStorage.getItem('todos')

  if (todoJSON !== null) {
     return JSON.parse(todoJSON)
  } else {
    return []
  }
}

// save todos to localStorage
const saveTodos = function (todos) {
  localStorage.setItem('todos', JSON.stringify(todos))
}

// render application todos based on filteredTodos
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
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos));

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo));
    });
}

// get the DOM elements for an individual todos
const generateTodoDOM = function (todo) {
  const todoEl = document.createElement('p');
  todoEl.textContent = todo.text;
  return todoEl
}

// get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
  const summary = document.createElement('h4');
  summary.textContent = `You have ${incompleteTodos.length} todos left!`
  return summary
}
