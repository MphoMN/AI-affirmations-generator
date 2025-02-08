function displayAffirm(response) {
  document.querySelector("#loading").style.display = "none";

  new Typewriter("#affirm", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateAffirmation(event) {
  event.preventDefault();

  document.querySelector("#loading").style.display = "block";

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "00c0fba388c6t2c60b1d8oea37e240eb";
  let context =
    "You are a positive person, that enjoys giving people affirmations to make themselves feel better, positive and motivated, only provide 3 affirmations with each number separented by <br />. Make sure to follow the user instructions";
  let prompt = `User instructions: Generate affirmations based on ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayAffirm);
}
let affirmFormElement = document.querySelector("#affirm-gen");
affirmFormElement.addEventListener("submit", generateAffirmation);
