"use strict";

const counterEl = document.getElementById("counter");
const addEl = document.getElementById("add");
const resetEl = document.getElementById("reset");

let counter = JSON.parse(localStorage.getItem("counter")) || 0;
updateCounter(counter);

function updateCounter(value) {
  counter = value;
  localStorage.setItem("counter", JSON.stringify(counter));
  counterEl.innerHTML = counter;
}

addEl.onclick = function () {
  updateCounter(counter + 1);
};

resetEl.onclick = function () {
  updateCounter(0);
};
