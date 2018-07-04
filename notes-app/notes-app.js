console.log('this is from a different file')

// query and remove
// const p = document.querySelector('p')
// p.remove()

// query all and remove
let ps = document.querySelectorAll('p')

ps.forEach(function (p) {
    p.textContent = '****'
    //console.log(p.textContent)
})
