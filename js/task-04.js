const refs = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),

  valueEl: document.querySelector("#value"),

  incrementBtn: document.querySelector('button[data-action="increment"]'),

  counterValue: 0,
  decrement() {
    console.log("decrement -> this", this);
    this.counterValue -= 1;
  },
  increment() {
    console.log("increment -> this", this);
    this.counterValue += 1;
  },
};

refs.decrementBtn.addEventListener("click", function () {
  refs.decrement();

  refs.valueEl.textContent = refs.counterValue;

  console.log(refs.valueEl);
});

refs.incrementBtn.addEventListener("click", function () {
  refs.increment();

  refs.valueEl.textContent = refs.counterValue;

  console.log(refs.valueEl);
});
