const frameElement = document.querySelector("#frames")
const mousePos = document.querySelector("#mousePos")
const slider = document.querySelector("#particleCount")
const sliderValue = document.querySelector("#sliderValue")
const canvasHeight = 200
const canvasWidth = 200

let allParticles = []

function setup() {
	createCanvas(canvasHeight, canvasWidth)
	canvas.style = "border: red solid 2px"
}

function draw() {
	background(255)
	for(let i = 0; i < allParticles.length; i++){
		particle = allParticles[i]
		strokeWeight(particle.weight)
		particle.update()

		particle.x = mapNoise(noise(particle.xt), 0, width)
		particle.y = mapNoise(noise(particle.yt), 0, height)

		particle.xt += .003
		particle.yt += .006
	}

	// update frame rate
	frameElement.innerText = `Frame Rate: ${frameRate()}`
	// update mouse pos
	mousePos.innerText = `Mouse X: ${mouseX} Mouse Y: ${mouseY}`
	// update value of slider
	sliderValue.innerText = `${slider.value}`
}

const mapNoise = (t, lowerBound, upperBound) => {
  return map(noise(t), 0, 1, lowerBound, upperBound);
}

const rand = (min, max) => {
	return Math.floor(Math.random() * (max - min)) + min
}

for(let i = 0; i < parseInt(slider.value); i++) {
	allParticles.push(
		new Particle(0, 0, 1.5, rand(800, 1000), rand(0, 20))
	)
}

slider.addEventListener('input', (e) => {
	updateParticles(parseInt(e.target.value))
})

const updateParticles = (count) => {
	particles = Array(count)
	for(let i = 0; i < particles.length; i++) {
		particles[i] = new Particle(0, 0, 1.5, rand(800, 1000), rand(0, 80))
	}
	allParticles = particles
}
