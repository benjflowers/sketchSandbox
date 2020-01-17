console.log('working')

const frameElement = document.querySelector("#frameCount")

function setup() {
  createCanvas(800, 800)
}

function draw() {
	background(255)
	frameElement.innerText = `Frame Rate: ${frameRate()}`

	for(let i = 0; i < 8000; i++){
		point(random(width), random(height))
	}
}