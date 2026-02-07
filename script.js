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
  setTimeout(updateText, 60);
}

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Skill bars animation initialization
document.addEventListener('DOMContentLoaded', () => {
  const fills = document.querySelectorAll('.skill-fill');
  fills.forEach((fill, i) => {
    const width = fill.dataset.width || '0%';
    setTimeout(() => {
      fill.style.width = width;
    }, 300 + i * 150);
  });
});