const refs = {
  bodyColor: document.querySelector("body"),
  textColor: document.querySelector(".color"),
  changeColorButton: document.querySelector(".change-color"),
};

refs.changeColorButton.addEventListener("click", onClickChangeColor);

function onClickChangeColor(event) {
  refs.bodyColor.style.backgroundColor = getRandomHexColor();

  refs.textColor.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
