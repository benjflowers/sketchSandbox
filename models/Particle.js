class Particle {
  constructor(x, y, weight) {
    this.x = x;
    this.y = y;
    this.weight = weight;
  }

  update() {
    point(this.x, this.y)
  }
}
