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

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchTexT.toLowerCase())
    })
    
    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach(function (note) {
      const noteEl = document.createElement('p');
      noteEl.textContent = note.title;
      document.querySelector('#notes').appendChild(noteEl);
    });
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e) {
  e.target.textContent = 'the button was clicked!'
});

document.querySelector('#remove-all').addEventListener('click', function () {
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove()
    })
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters)
})







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
*/
