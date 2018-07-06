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

// query and remove
// const p = document.querySelector('p')
// p.remove()

// query all and remove
let ps = document.querySelectorAll('p')

ps.forEach(function (p) {
    p.textContent = '****'
    //console.log(p.textContent)
})

// add new element
const newPara = document.createElement('p')
newPara.textContent = 'This is a new element from JS'
document.querySelector('body').appendChild(newPara)