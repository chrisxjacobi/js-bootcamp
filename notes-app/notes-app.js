const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'exercise'
}, {
    title: 'office mods',
    body: 'get a new seat'
}]

// DOM - Document Object Model

// query and remove
// const p = document.querySelector('p')
// p.remove()

// // query all and remove
// const ps = document.querySelectorAll('p')
//
// ps.forEach(function (p) {
//     p.textContent = '*****'
//     // console.log(p.textContent)
//     // p.remove()
// })
//
// // add new element
// const newPara = document.createElement('p')
// newPara.textContent = 'this is a new paragraph from js'
// document.querySelector('body').appendChild(newPara)

/*
SINGLE
p
#replace
.item

MULTIPLE
p#order
button.inventory
h1#title.application
h1.application#title
*

document.querySelector('#create-note').addEventListener('click', function(e) {
  e.target.textContent = 'the button was clicked!'
});

document.querySelector('#remove-all').addEventListener('click', function () {
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove()
    })
})
