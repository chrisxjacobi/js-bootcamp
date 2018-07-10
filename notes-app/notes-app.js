const notes = [{
  title: 'My next trip',
  body: 'I would like to go to Spain'
}, {
  title: 'Habits to work on',
  body: 'exercise. eating a bit better'
}, {
  title: 'Office mods',
  body: 'get a new chair'
}]

document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'the button was clicked'
})

document.querySelector('#remove-all').addEventListener('click', function() {
  document.querySelectorAll('.note').forEach(function(note) {
      note.remove()
  })
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    console.log(e.target.value)
})