const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

//we want to have an active slide index
let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight

    //to see the direction being passed in 
    if(direction === 'up') {
        activeSlideIndex++
        //if we are at the end of the slide
        if(activeSlideIndex > slidesLength - 1) { 
            //so we are gonna go back to the beginning
            activeSlideIndex = 0 
        }
    }else  if (direction === 'down') {
        activeSlideIndex--
        //if we are at the end of the slide
        if (activeSlideIndex < 0) {
            //so we are gonna go back to the beginning
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${
        activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${
        activeSlideIndex * sliderHeight}px)`
}