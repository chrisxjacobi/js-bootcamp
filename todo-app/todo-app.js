const todos = [{
  text: 'go to movy',
  completed: false
}, {
  text: 'make breakfast',
  completed: true
}, {
  text: 'go to gym',
  completed: false
}, {
  text: 'get haircut',
  completed: true
}, {
  text: 'watch world cup',
  completed: true
}]

const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left!`
document.querySelector('body').appendChild(summary)


todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})

document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('button clicked!')
})