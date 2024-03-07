let panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', (obj) => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach( panel => {
        panel.classList.remove('active')
    })
}