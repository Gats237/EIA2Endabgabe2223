namespace Feuerwerksimulator {

    export class Raketen {

let particleCount: number = 100;
let particles: number = [];
let particleRadius = 2;
let colors = ["red", "orange", "yellow", "green", "blue", "purple"];

// Initialize particles
for (var i = 0; i < particleCount; i++) {
  let particle = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    velocityX: (Math.random() - 0.5) * 5,
    velocityY: (Math.random() - 0.5) * 5,
    color: colors[Math.floor(Math.random() * colors.length)],
    lifespan: 100
  };
  particles.push(particle);
}

// Draw particles
function draw() {
  crc2.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < particleCount; i++) {
    var particle = particles[i];
    crc2.beginPath();
    crc2.arc(particle.x, particle.y, particleRadius, 0, 2 * Math.PI);
    crc2.fillStyle = particle.color;
    crc2.fill();
    particle.x += particle.velocityX;
    particle.y += particle.velocityY;
    particle.lifespan -= 1;
    if (particle.lifespan <= 0) {
      particles[i] = newParticle();
    }
  }
  requestAnimationFrame(draw);
}

function newParticle() {
  var particle = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    velocityX: (Math.random() - 0.5) * 5,
    velocityY: (Math.random() - 0.5) * 5,
    color: colors[Math.floor(Math.random() * colors.length)],
    lifespan: 100
  };
  return particle;
}

draw();

    }
}