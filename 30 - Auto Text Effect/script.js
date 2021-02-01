const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We love Programming!'
let idx = 1
let speed = 300/speedEl.value

writeText()

function writeText() {
    //with slice() we can get a certain range of the string from zero to one in this case, in which the idx starts at one.
    textEl.innerText = text.slice(0, idx)

    idx++
    //check to see if it is the end of the string that we are typing out
    if(idx > text.length){
        //if true set idx to one to start over.
        idx = 1
    }

    //we want to keep calling the function writeText()
    //what setTimeout does it set a specific function and it will wait a specific amount of time. 
    setTimeout(writeText, speed)
}

//it will listen to input in which case listens to any input we tpye in or any keys
speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)