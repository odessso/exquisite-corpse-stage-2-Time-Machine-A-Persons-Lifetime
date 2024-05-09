let images = [];
let labels = [
  "Birth", 
  "First steps", 
  "First day of school", 
  "Graduation", 
  "First love", 
  "Marriage", 
  "Childbirth", 
  "Formation of a family", 
  "Children starting their own families", 
  "Retirement",
  "Loss of a loved one",
  "Serious illness",
  "Decease"
];
let numImages = 12;
let current_time = 0;
let interval = 1000;
let angle = 0;
let arc_per_second = 2 * Math.PI / numImages;
let radius;
let alternativeClock = false;

function preload() {
  for (let i = 0; i < numImages * 2; i++) {
    images.push(loadImage("images/image" + i + ".jpg"));
  }
}

function setup() {
  createCanvas(800, 600);
  setInterval(change_image, interval);
  radius = width / 4;
}

function draw() {
  background(255); // Clear the background

  // Display the appropriate set of images based on the clock mode
  let offset = alternativeClock ? numImages : 0;
  image(images[current_time + offset], 0, 0, width, height);

  fill(255, 150);
  rect(0, 0, width, height);

  translate(width / 2, height / 2);
  stroke(0);
  noFill();
  strokeWeight(2);
  ellipse(0, 0, radius * 2);
  for (let i = 0; i < 13; i++) {
    let x = cos(angle + i * arc_per_second) * radius;
    let y = sin(angle + i * arc_per_second) * radius;
    let x2 = cos(angle + i * arc_per_second) * (radius - 10);
    let y2 = sin(angle + i * arc_per_second) * (radius - 10);
    line(x, y, x2, y2);
  }
  strokeWeight(4);
  let pointerX = cos(angle) * (radius - 30);
  let pointerY = sin(angle) * (radius - 30);
  line(0, 0, pointerX, pointerY);
  translate(-width / 2, -height / 2);
  
  strokeWeight(1);
  textAlign(CENTER, TOP);
  textSize(25);
  fill(0);
  text("Time Machine - In a Person's Lifetime", width / 2, 10);

  textAlign(CENTER, TOP);
  textSize(20);
  fill(0);
  text(labels[current_time], width / 2, height - 30);
}

function change_image() {
  current_time = (current_time + 1) % numImages;
  angle += arc_per_second;
}

function mouseClicked() {
  // Toggle between the two versions of the clock when the user clicks the screen
  alternativeClock = !alternativeClock;
}
