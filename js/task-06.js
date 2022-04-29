const refs = {
  textInput: document.querySelector("#validation-input"),
};

console.log(refs.textInput);

refs.textInput.addEventListener("blur", validInvalid);

function validInvalid(event) {
  const dataLength = Number(refs.textInput.getAttribute("data-length"));
  // alert(dataLength);

  let text = refs.textInput.value.length;
  //   console.log(text);
  if (dataLength === text) {
    refs.textInput.classList.remove("invalid");

    refs.textInput.classList.add("valid");
  } else {
    refs.textInput.classList.remove("valid");

    refs.textInput.classList.add("invalid");
  }
}
