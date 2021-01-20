//were gonna use the Canvas API
const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');

let size = 10
let isPressed = false //we want to know when the mouse is being pressed
let color = 'black'
let x
let y

//deal with mouse events
canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    //get the position where the mouse is
    x = e.offsetX
    y = e.offsetY

})

//when release we want to set isPressed to false and clear the values
canvas.addEventListener('mouseup', (e) => {
  isPressed = false;

  //get the position where the mouse is
  x = undefined
  y = undefined
});

//now we want an evvent for mouse move
canvas.addEventListener('mousemove', (e) => {
  //we get the positioning if the mouse is being pressed
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }

});

function drawCircle(x, y) { 
    //x and y will be the positioning when drawing a circle
    ctx.beginPath(); // to draw a circle we need to begin a path
    ctx.arc(x, y, size, 0, Math.PI * 2, true)
    //set a color in the cirle first
    ctx.fillStyle = color
    //let fill the circle
    ctx.fill()

}
//gonna take in the moveto positions
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1) //thats gonna move to a specific position
    ctx.lineTo(x2, y2)
    //apply color
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    //to actually draw the line
    ctx.stroke()
}

function updateSizeOnScreen() {
    sizeEl.innerText = size
}

//set the color tool
colorEl.addEventListener('change', (e) => color = e.target.value)

//set the size in tool
increaseBtn.addEventListener('click', () => {
    size +=5
    if(size > 50) {
        size = 50
    }

    updateSizeOnScreen()
})

decreaseBtn.addEventListener("click", () => {
  size -= 5;
  if (size < 5) {
    size = 5;
  }

  updateSizeOnScreen();
});

clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))