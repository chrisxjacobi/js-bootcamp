const paras = document.querySelectorAll('p')

paras.forEach(function (p) {
    if (p.textContent.includes('eat')) {
        p.remove()
    }
    
})