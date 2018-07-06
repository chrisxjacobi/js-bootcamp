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

// console.log('A' < 'a');

const sortNotes = function (notes) {
  notes.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1
    } else {
      return 0
    }
  })
}


const findNote = function (notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}

const findNotes = function (notes, query) {
  return notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
    return isTitleMatch || isBodyMatch
  })
}


// console.log(findNotes(notes, 'eati'));
//
// const note = findNote(notes, 'OFFIce mods')
// console.log(note);

sortNotes(notes)
console.log(notes);









// const notes = [{
//     title: 'my next trip',
//     body: 'I would like to go to Spain'
// }, {
//     title: 'Habits to work on',
//     body: 'exercise'
// }, {
//     title: 'office mods',
//     body: 'get a new seat'
// }]
//
// const sortNotes = function (notes) {
//     notes.sort(function (a, b) {
//         if (a.title.toLowerCase() < b.title.toLowerCase()) {
//            return -1
//         } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
//             return 1
//         } else {
//             return 0
//         }
//     })
// }
//
// sortNotes(notes)
// console.log(notes);
//
//
// const findNote = function (notes, noteTitle) {
//     return notes.find(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
// }
//
// const findNotes = function (notes, query) {
//     return notes.filter(function (note, index) {
//         const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
//         const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
//         return isTitleMatch || isBodyMatch
//     })
//
// }
//
//
// // console.log(findNotes(notes, 'c'));
//
// // console.log(notes.pop())
// // notes.push('My new note')
//
// // console.log(notes.shift());
// // notes.unshift('My first note')
//
// // notes.splice(1, 1, 'this is the new second note')
//
// // notes[2] = 'this is the new note 3'
//
// // notes.forEach(function (item, index) {
// //     console.log(index)
// //     console.log(item)
// // })
//
// // counting... 1,
// // for (let count = 2; count >= 0; count--) {
// //     console.log(count);
// // }
//
// // for (let count = notes.length - 1; count >= 0; count--) {
// //     console.log(notes[count]);
// // }
//
//
// // const findNote = function (notes, noteTitle) {
// //     const indexNote = notes.findIndex(function (note, index) {
// //         return note.title.toLowerCase() === noteTitle.toLowerCase()
// //     })
// //     return notes[indexNote]
// // }
//
// // const note = findNote(notes, 'Office mods')
// // console.log(note);
//
//
// // console.log(notes.length);
// // console.log(notes);
//
// // const indexNote = notes.findIndex(function (note, index) {
// //     return note.title === 'Habits to work on'
// // })
//
// // console.log(indexNote);
