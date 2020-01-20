class Ellipse {
  constructor(x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.radius = w/2;
  }

  update() {
    ellipse(this.x, this.y, this.w)
  }
}
