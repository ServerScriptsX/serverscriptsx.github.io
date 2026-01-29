// Typewriter Effect
const type = document.querySelector(".typewriter");
const careers = ["Student", "Web Developer", "Designer"];
let careerIndex = 0;
let characterIndex = 0;
let isDeleting = false;
let isPaused = false;

updateText();

function updateText() {
  if (!isPaused) {
    characterIndex++;
    type.innerHTML = `
      <h1>I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[
      careerIndex
    ].slice(0, characterIndex)}</h1>
      `;

    if (characterIndex === careers[careerIndex].length) {
      isPaused = true;
      setTimeout(() => {
        isPaused = false;
        careerIndex++;
        characterIndex = 0;
        if (careerIndex === careers.length) {
          careerIndex = 0;
        }
      }, 1800 );
    }
  }
  setTimeout(updateText, 200);
}

// Particle Effect System
class Particle {
  constructor() {
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;
    this.opacity = Math.random() * 0.5 + 0.2;
    this.color = Math.random() > 0.5 ? '#00ffff' : '#ff00ff';
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.opacity -= 0.01;
    
    if (this.x > window.innerWidth) this.x = 0;
    if (this.x < 0) this.x = window.innerWidth;
    if (this.y > window.innerHeight) this.y = 0;
    if (this.y < 0) this.y = window.innerHeight;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

// Create canvas for particle effect
const canvas = document.createElement('canvas');
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = '-1';
canvas.style.pointerEvents = 'none';
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function initParticles() {
  particles = [];
  for (let i = 0; i < 50; i++) {
    particles.push(new Particle());
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  particles.forEach((particle, index) => {
    particle.update();
    particle.draw(ctx);
    
    if (particle.opacity <= 0) {
      particles[index] = new Particle();
    }
  });
  
  requestAnimationFrame(animateParticles);
}

// Handle window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Initialize particles
initParticles();
animateParticles();

// Interactive tile effects
const tiles = document.querySelectorAll('.tile');
tiles.forEach(tile => {
  tile.addEventListener('mouseenter', () => {
    tile.style.transform = 'translateY(-5px) scale(1.05)';
  });
  
  tile.addEventListener('mouseleave', () => {
    tile.style.transform = 'translateY(0) scale(1)';
  });
});

// Smooth scroll for links
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Add mouse tracking glow effect
document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  
  const radial = document.querySelector('body::before');
  if (radial) {
    document.body.style.background = 
      `linear-gradient(135deg, #0a0e27 0%, #1a1f3a 25%, #16213e 50%, #0f3460 75%, #0a0e27 100%), 
       radial-gradient(circle at ${x}px ${y}px, rgba(0, 255, 255, 0.1) 0%, transparent 500px),
       radial-gradient(circle at ${x + 100}px ${y + 100}px, rgba(255, 0, 255, 0.1) 0%, transparent 500px)`;
  }
});