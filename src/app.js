function generateAffirmation(event) {
  event.preventDefault();
  new Typewriter("#affirmation", {
    strings: "Generating your affirmation...✨",
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

let affirmationFormElement = document.querySelector(
  "#affirmation-generator-form"
);
affirmationFormElement.addEventListener("submit", generateAffirmation);
