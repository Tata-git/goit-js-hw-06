const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
console.log(ingredientsEl);

const listElements = ingredients.map((ingredient) => {
  const list = document.createElement("li");
  console.log(list);

  list.textContent = ingredient;
  list.classList.add("item");

  return list;
});

ingredientsEl.append(...listElements);
console.log(ingredientsEl);
