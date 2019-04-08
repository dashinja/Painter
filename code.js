// Variables
const canvas = document.querySelector('.canvas')
const clearButton = document.querySelector('.clear')
const shapes = document.querySelector('.shapes')

let isDrawing = false
let shape = 'circleOption'

// Event Listeners
canvas.addEventListener('mousedown', e => {
  console.log('Drawing')
  isDrawing = true
  paintSpot(e.pageX, e.pageY)
})

canvas.addEventListener('mouseup', () => {
  console.log('Not Drawing')
  isDrawing = false
})

canvas.addEventListener('mouseleave', () => {
  console.log('Not Drawing')
  isDrawing = false
})

canvas.addEventListener('mousemove', e => {
  if (isDrawing) paintSpot(e.pageX, e.pageY)
})

clearButton.addEventListener('click', () => {
  canvas.innerHTML = ''
})

shapes.addEventListener('click', e => {
  if (e.target.className !== 'shapes') {
    shape = e.target.className
  }
})

//Functions
function paintSpot(x, y) {
  const spot = document.createElement('div')
  spot.className = `spot ${shape}`
  spot.style.left = `${x - 22}px`
  spot.style.top = `${y - 22}px`
  spot.style.background = 'lightblue'
  canvas.appendChild(spot)
}
