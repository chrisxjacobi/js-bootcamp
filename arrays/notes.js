const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'exercise'
}, {
    title: 'office mods',
    body: 'get a new seat'
}]

// console.log(notes.pop())
// notes.push('My new note')

// console.log(notes.shift());
// notes.unshift('My first note')

// notes.splice(1, 1, 'this is the new second note')

// notes[2] = 'this is the new note 3'

// notes.forEach(function (item, index) {
//     console.log(index)
//     console.log(item)
// })

// counting... 1, 
// for (let count = 2; count >= 0; count--) {
//     console.log(count);
// }

// for (let count = notes.length - 1; count >= 0; count--) {
//     console.log(notes[count]);
// }


const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    
}

// const findNote = function (notes, noteTitle) {
//     const indexNote = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[indexNote]
// }

const note = findNote(notes, 'Office mods')
console.log(note);


// console.log(notes.length);
// console.log(notes);

// const indexNote = notes.findIndex(function (note, index) {
//     return note.title === 'Habits to work on'
// })

// console.log(indexNote);
