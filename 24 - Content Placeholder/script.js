const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile-img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('animated-bg')
const animated_bg_texts = document.querySelectorAll('animated-bg-text')

setTimeout(getData, 3000)

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1609951651556-5334e2706168?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" >'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, consequuntur.'
    profile_img.innerHTML = '<img src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJydW5ldHRlJTIwaGFpciUyMHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">'
    name.innerHTML = 'Jane Doe'
    date.innerHTML = 'Oct 21, 2020'

    animated_bgs.forEach(bg => bg.classList.remove('animated_bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated_bg_text'))
}