const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const mail = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    mail,
    password,
  };

  if (mail !== "" && password !== "") {
    console.log(formData);

    event.currentTarget.reset();
  } else {
    alert("Все поля должны быть заполнены");
  }
}
