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