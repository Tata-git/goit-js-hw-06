const refs = {
  inputSize: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.inputSize.addEventListener("input", changeFont);

function changeFont(event) {
  text.style.fontSize = event.currentTarget.value + "px";
}
