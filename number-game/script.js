let number = Math.floor(Math.random() * 100) + 1;

let form = document.forms.guess;
let errorMessage = document.getElementById("errorMessage");
let successMessage = document.getElementById("successMessage");
let playButton = document.getElementById("playButton");
let timer;

function showErrorMessage(content) {
  errorMessage.innerHTML = content;

  errorMessage.classList.add("visible");

  form.classList.add("animate__animated", "animate__shakeX");

  clearTimeout(timer);
  timer = setTimeout(() => {
    form.classList.remove("animate__animated", "animate__shakeX");
    errorMessage.classList.remove("visible");
  }, 1500);
}

function showSuccessMessage() {
  document.querySelector(".container").classList.add("blur");
  successMessage.classList.add(
    "visible",
    "animate__animated",
    "animate__jackInTheBox"
  );

  successMessage.addEventListener(
    "animationend",
    () => {
      successMessage.classList.remove(
        "animate__animated",
        "animate__jackInTheBox"
      );
    },
    { once: true }
  );
}

playButton.onclick = function () {
  number = Math.floor(Math.random() * 100) + 1;

  document.querySelector(".container").classList.remove("blur");
  successMessage.classList.add("animate__animated", "animate__zoomOut");
  successMessage.addEventListener(
    "animationend",
    () => {
      successMessage.classList.remove(
        "animate__animated",
        "animate__zoomOut",
        "visible"
      );
    },
    { once: true }
  );
};

form.onsubmit = function (event) {
  event.preventDefault();

  let guess = Number(this.elements.guess.value);
  this.elements.guess.value = "";

  if (Number.isNaN(guess)) {
    showErrorMessage("That's not a number...");
  } else if (number < guess) {
    showErrorMessage("Lower. Guess gain!");
  } else if (number > guess) {
    showErrorMessage("Higher. Guess gain!");
  } else {
    showSuccessMessage();
  }
};
