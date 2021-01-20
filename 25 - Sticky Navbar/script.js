const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    console.log(window.scrollY, nav.offsetHeight) //to check the scroll point, and the navh offset height

    if (window.scrollY > nav.offsetHeight + 50){
        nav.classList.add('active')
    }else{
        nav.classList.remove('active')
    }
}