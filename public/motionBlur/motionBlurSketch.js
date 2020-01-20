let x = 0;
let y = 0;

let t = 0;
let t2 = .03;

let blurbCount = 3;
let blurbs = [];

let blurb = new Ellipse(0, 0, 30);
let blurb2 = new Ellipse(.25, 0, 30);

let nonBlurb = new Ellipse(0, -50, 30);


function setup(){
  createCanvas(200, 200)
  canvas.style = "border: red solid 2px"

  for(let i = 0; i < blurbCount; i++) {
    blurbs.push(new Ellipse(i * 2, 0, 30))
  }

}

function draw(){
  background(255)
  translate(width/2, height/2)

  // for(let i = 0; i < blurbs.length; i++) {
  //   blurbs[i] = blurb
  //   blurb.x = cos(t) * width/2 - blurb.radius
  //   blurb.update()
  // }

  nonBlurb.x = cos(t) * width/2 - nonBlurb.radius
  nonBlurb.update()

  blurb2.x = cos(t2) * width/2 - blurb2.radius
  blurb2.update()

  blurb.x = cos(t) * width/2 - blurb.radius
  blurb.update()



  t += .05
  t2 += .05
}
