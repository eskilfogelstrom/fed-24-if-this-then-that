let form = document.getElementById("firstNameForm");

form.onsubmit = function (event) {
  event.preventDefault();
  let firstName = form.elements.firstName.value;
  let lastName = form.elements.lastName.value;

  alert(`Hello ${firstName} ${lastName}`);
};
