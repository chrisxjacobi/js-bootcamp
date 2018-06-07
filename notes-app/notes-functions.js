// read existing notes from localStorage
const getSavedNotes = function() {
  const notesJSON = localStorage.getItem('notes')

  if (notesJSON !== null) {
    return JSON.parse(notesJSON)
  } else {
    return []
  }
}

// save notes to localStorage
const saveNotes = function(notes) {
  localStorage.setItem('notes', JSON.stringify(notes))
}

// generate DOM structure for the note
const generateNotesDOM = function(note) {
  const noteEl = document.createElement('div')
  const textEl = document.createElement('span')
  const button = document.createElement('button')

  // set up remove note button
  button.textContent = 'x'
  noteEl.appendChild(button)

  // set up the note title text
  if (note.title.length > 0) {
    textEl.textContent = note.title
  } else {
    textEl.textContent = 'Unnamed note'
  }
  noteEl.appendChild(textEl)

  return noteEl
}

// render application notes
const renderNotes = function(notes, filters) {
  const filteredNotes = notes.filter(function(note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  document.querySelector('#notes').innerHTML = '';

  filteredNotes.forEach(function(note) {
    const noteEl = generateNotesDOM(note)
    document.querySelector('#notes').appendChild(noteEl)
  })
}
