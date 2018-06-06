let notes = []

const filters = {
    searchText: ''
}

// check for existing saved data
const notesJSON = localStorage.getItem('notes')

if (notesJSON !== null) {
  notes = JSON.parse(notesJSON)
}


const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        if (note.title.length > 0) {
          noteEl.textContent = note.title

        } else {
          noteEl.textContent = 'Unnamed note'
        }

        document.querySelector('#notes').appendChild(noteEl)

    })
}

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function (e) {
    notes.push({
      title: '',
      body: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, filters)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters);
})

document.querySelector('#filter-by').addEventListener('change', function(e) {
    console.log(e.target.value);
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

//     searchText: ''
// }

// const renderNotes = function (notes, filters) {
//     const filteredNotes = notes.filter(function (note) {
//         return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
//     })

//     document.querySelector('#notes').innerHTML = '';

//     filteredNotes.forEach(function (note) {
//       const noteEl = document.createElement('p');
//       noteEl.textContent = note.title;
//       document.querySelector('#notes').appendChild(noteEl);
//     });
// }

// renderNotes(notes, filters)
