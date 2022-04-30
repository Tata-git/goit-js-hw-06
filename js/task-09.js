const refs = {
  bodyColor: document.querySelector("body"),
  textColor: document.querySelector(".color"),
  changeColorButton: document.querySelector(".change-color"),
};

refs.changeColorButton.addEventListener("click", onClickChangeColor);

function onClickChangeColor(event) {
  let randomColor = getRandomHexColor();
  refs.bodyColor.style.backgroundColor = randomColor;
  // console.log(refs.bodyColor.style.backgroundColor);
  refs.textColor.textContent = randomColor;
  // console.log(refs.textColor.textContent);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
