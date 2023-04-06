// all precipitation and wind effects are based on focal points happiness
// they emanate from the focal point in 360 degree direction and are relative to that areas climate
// weather in areas surrounding the focal point are informed by historical focal point values relative to geolocation
// there are complexity involved, as the focal point changes geolocation
// this can be modeled using a 2d water droplet effect
// https://web.archive.org/web/20160418004149/http://freespace.virgin.net/hugo.elias/graphics/x_water.htm
// http://panoramx.ift.uni.wroc.pl/%7Emaq/felp.pl/ripple/index.html
// https://editor.p5js.org/codingtrain/sketches/tYXtzNSl

let cols;
let rows;
let current;
let previous;
let dampening = 0.995;

function setup() {
  pixelDensity(1);
  createCanvas(500, 500);
  cols = width;
  rows = height;
  current = new Array(cols).fill(0).map(n => new Array(rows).fill(0));
  previous = new Array(cols).fill(0).map(n => new Array(rows).fill(0));
}

function mouseDragged() {
  previous[mouseX][mouseY] = 3500;
}

function draw() {
  background(0);

  loadPixels();

  for (let i = 1; i < cols - 1; i++) {
    for (let j = 1; j < rows - 1; j++) {
      current[i][j] =
        (previous[i - 1][j] +
          previous[i + 1][j] +
          previous[i][j - 1] +
          previous[i][j + 1]) /
          2 -
        current[i][j];
      current[i][j] = current[i][j] * dampening;
      // Unlike in Processing, the pixels array in p5.js has 4 entries
      // for each pixel, so we have to multiply the index by 4 and then
      // set the entries for each color component separately.
      let index = (i + j * cols) * 4;
      pixels[index + 0] = current[i][j];
      pixels[index + 1] = current[i][j];
      pixels[index + 2] = current[i][j];
    }
  }
  updatePixels();

  let temp = previous;
  previous = current;
  current = temp;
}
