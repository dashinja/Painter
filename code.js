// Variables
const canvas = document.querySelector('.canvas')
const clearButton = document.querySelector('.clear')
const shapes = document.querySelector('.shapes')
const colorInput = document.querySelector('.color')

let isDrawing = false
let shape = 'circleOption'
let color = 'black'

// Event Listeners
canvas.addEventListener('mousedown', e => {
  isDrawing = true
  paintSpot(e.pageX, e.pageY)
})

canvas.addEventListener('mouseup', () => {
  isDrawing = false
})

canvas.addEventListener('mouseleave', () => {
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

colorInput.addEventListener('change', e => {
  color = e.target.value
  for (let shape of shapes.children) {
    shape.style.background = color
  }
})

//Functions
function paintSpot(x, y) {
  const spot = document.createElement('div')
  spot.className = `spot ${shape}`
  spot.style.left = `${x - 22}px`
  spot.style.top = `${y - 22}px`
  spot.style.background = color
  canvas.appendChild(spot)
}
