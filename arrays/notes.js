const notes = ['Note 1', 'Note 2', 'Note 3']

// console.log(notes.pop())
// notes.push('My new note')

// console.log(notes.shift());
// notes.unshift('My first note')

// notes.splice(1, 1, 'this is the new second note')

notes[2] = 'this is the new note 3'

notes.forEach(function (item, index) {
    console.log(index)
    console.log(item)
    
})

console.log(notes.length);
console.log(notes);

// counting... 1, 
for (let count = 2; count >= 0; count--) {
    console.log(count);
}

for (let count = notes.length - 1; count >= 0; count--) {
    console.log(notes[count]);
}