et canvas = document.getElementById('can')
let ctx = canvas.getContext('2d')
canvas.width = 600
canvas.height = 400
let mouseX, mouseY
let isDrawing = false
let $canvastools = document.querySelector('.canvas-tools'),
colorCNV, rangeCNV
let $areaRang = document.querySelector('.areaRang')
$canvastools.addEventListener('input', function(e){
let value = e.target.value
if (e.target.id == 'rangCNV'){
  rangCNV =  value
  $areaRang.textContent = rangCNV
}
if(e.target.id == 'colorCNV')
colorCNV = value
})
document.querySelector('.btnClear').addEventListener('click', function(e){
  ctx.clearRect(0,0,canvas.width,canvas.height)
}
  )

canvas.addEventListener('mousemove', (e) => {
fooMouse(e)
if(isDrawing){
ctx.lineTo(mouseX, mouseY)
ctx.lineWidth = rangCNV
ctx.strokeStyle = colorCNV
ctx.stroke()
}
})

canvas.addEventListener('mousedown', (e) => {
  fooMouse(e)
  isDrawing = true
  if(isDrawing){
ctx.beginPath()
ctx.moveto = mouseX, mouseY
  }
})

canvas.addEventListener('mouseup', (e) => {
fooMouse(e)
ctx.closePath()
isDrawing = false
})

function fooMouse(e) {
    mouseX = e.offsetX
    mouseY = e.offsetY
}
