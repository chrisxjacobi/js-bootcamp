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


const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

const summary = document.createElement('h4');
summary.textContent = `You have ${incompleteTodos.length} todos left!`;
document.querySelector('body').appendChild(summary);

todos.forEach(function (todo) {
    const item = document.createElement('p');
    item.textContent = todo.text;
    document.querySelector('body').appendChild(item);
});

// listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function () {
    console.log('add a new todo!')
})

// listen for todo text change
document.querySelector('#new-todo').addEventListener('input', function (e) {
    console.log(e.target.value)
})






// const paras = document.querySelectorAll('p')

// paras.forEach(function (p) {
//     if (p.textContent.includes('eat')) {
//         p.remove()
//     }

// })


// `you have __ todos left` (p element)
// print p for each todo (use text of obj as text)