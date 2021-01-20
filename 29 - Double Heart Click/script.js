
const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

// there are two options for using a double click event
//this by using bdlclick event
// loveMe.addEventListener('dblclick', (e) => {
//     console.log(123)
// })

//or this by creating our own double click event

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener('click', (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime()
    }else {
        if(new Date().getTime() - clickTime < 800){
            //we parameter the event into the create heart funciton becuase we want to know where the to appear
            
            createHeart(e)
            clickTime = 0
        }else {
            clickTime = new Date.getTime()
        }
    }
})

const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`
    
    loveMe.appendChild(heart)
    times.innerHTML = ++timesClicked

    setTimeout(() => heart.remove(), 1000)
}