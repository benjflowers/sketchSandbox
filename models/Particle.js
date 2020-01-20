class Particle {
  constructor(x, y, weight, xt, yt) {
    //point of origin
    this.x = x;
    this.y = y;

    // strokeweight
    this.weight = weight;

    // x and y value used for perlin noise
    this.xt = xt;
    this.yt = yt;
  }

  update() {
    point(this.x, this.y)
  }
}
