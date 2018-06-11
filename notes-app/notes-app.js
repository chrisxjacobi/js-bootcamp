const notes = getSavedNotes()

const filters = {
  searchText: ''
}

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function(e) {
  notes.push({
    id: uuidv4(),
    title: '',
    body: ''
  })
  saveNotes(notes)
  renderNotes(notes, filters)
})

document.querySelector('#search-text').addEventListener('input', function(e) {
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

//  query all and remove
// const ps = document.querySelectorAll('p')
//
// ps.forEach(function (p) {
//     p.textContent = '*****'
//      console.log(p.textContent)
//      p.remove()
// })
//
//  add new element
// const newPara = document.createElement('p')
// newPara.textContent = 'this is a new paragraph from js'
// document.querySelector('body').appendChild(newPara)

/* SINGLE
p
#replace
.item

MULTIPLE
p#order
button.inventory
h1#title.application
h1.application#title
*/
