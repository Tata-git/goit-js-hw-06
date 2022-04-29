const refs = {
  input: document.querySelector("#name-input"),
  userName: document.querySelector("#name-output"),
};

function onInputChange(event) {
  // console.log(event);
  //   console.log(event.currentTarget.value);

  refs.userName.textContent = event.currentTarget.value;

  if (refs.userName.textContent === "") {
    return (refs.userName.textContent = "Anonymous");
  }
}
refs.input.addEventListener("input", onInputChange);
