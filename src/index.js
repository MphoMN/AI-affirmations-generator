function generateAffirmation(event) {
  event.preventDefault();

  new Typewriter("#affirm", {
    strings: "Today is filled with endless opportunities",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
let affirmFormElement = document.querySelector("#affirm-gen");
affirmFormElement.addEventListener("submit", generateAffirmation);
