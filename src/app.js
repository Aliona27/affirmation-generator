function displayAffirmation(response) {
  let affirmation = response.data.answer;
  let affirmationElement = document.querySelector("#affirmation");
  affirmationElement.innerHTML = `${affirmation}`;

  new Typewriter("#affirmation", {
    strings: `${affirmation}💜`,
    autoStart: true,
    delay: 15,
    cursor: "",
  });
}

function generateAffirmation(event) {
  event.preventDefault();
  let affirmationElement = document.querySelector("#affirmation");
  affirmationElement.innerHTML = "Generating your affirmation...🪄✨";
  let apiKey = "fbaa14d04fa37f863bcc9t0cb9a68a1o";
  let userInput = document.querySelector("#user-input");
  let prompt = `Create an affirmation inspired by the word: ${userInput.value}. Add a relevant emoji at the end.`;
  let context =
    "You are an affirmation generator. Your only task is to create positive, motivational, or soulful affirmation. Each affirmation should feel uplifting, encouraging, and emotionally resonant. Keep your responses short and concise at 1-2 sentences long. Always write in a warm and inspiring tone. Do not provide explanations or lists — only the affirmation itself.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayAffirmation);
}

let affirmationFormElement = document.querySelector(
  "#affirmation-generator-form"
);
affirmationFormElement.addEventListener("submit", generateAffirmation);
