"use strict";

const counterEl = document.getElementById("counter");
const addEl = document.getElementById("add");
const resetEl = document.getElementById("reset");

let counter = 0;

function updateCounter(value) {
  counter = value;
  counterEl.innerHTML = counter;
}

addEl.onclick = function () {
  updateCounter(counter + 1);
};

resetEl.onclick = function () {
  updateCounter(0);
};
