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

// query all and remove
const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
    p.textContent = '*****'
    // console.log(p.textContent)
    // p.remove()
})

// add new element
const newPara = document.createElement('p')
newPara.textContent = 'This is a new element from JS'
document.querySelector('body').appendChild(newPara)