const canvas = document.querySelector('.canvas')
const clearButton = document.querySelector('.clear')

let isDrawing = false

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

function paintSpot(x, y) {
  const spot = document.createElement('div')
  spot.className = 'spot circleOption'
  spot.style.left = `${x - 22}px`
  spot.style.top = `${y - 22}px`
  spot.style.background = 'lightblue'
  canvas.appendChild(spot)
}

clearButton.addEventListener('click', () => {
  canvas.innerHTML = ''
})
