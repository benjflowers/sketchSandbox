const frameElement = document.querySelector("#frames")
const mousePos = document.querySelector("#mousePos")
const canvasHeight = 800
const canvasWidth = 800
const particle = new Particle(canvasHeight, canvasWidth, 3)

function setup() {
	createCanvas(canvasHeight, canvasWidth)
	canvas.style = "border: red solid 2px"

}

function draw() {
	background(255)

	strokeWeight(particle.weight)
	particle.x = random(canvasWidth)
	particle.y = random(canvasHeight)
	particle.update()

	// update frame rate
	frameElement.innerText = `Frame Rate: ${frameRate()}`
	// update mouse pos
	mousePos.innerText = `Mouse X: ${mouseX} Mouse Y: ${mouseY}`
}
