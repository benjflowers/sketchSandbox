class Particle {
  constructor(x, y, weight, xt, yt) {
    this.x = x;
    this.y = y;
    this.weight = weight;
    this.xt = xt;
    this.yt = yt;
  }

  update() {
    point(this.x, this.y)
  }
}
