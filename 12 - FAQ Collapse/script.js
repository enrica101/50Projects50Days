//- Bring in toggle buttons (querySelectorAll)
// - Loop thorugh nodeList (forEach)
// - Add click Event (addEventListener)
// - Toggle the acive class on the parent node (.parentNode & classList.toggle())

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {

    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})