function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(30,144,255);
  circle (200,200,300);
  circle (160,150,60);
  circle (240,150,75);
  line (150, 250, 250, 240);
  triangle (200,170,150,220,210,210);
  
  //console.log("Hello, World!!!!");
  //console.log("Estou aprendendo com o Fabão");
  
  if (mouseIsPressed) {
      console.log(mouseX, mouseY);
      }
  
}