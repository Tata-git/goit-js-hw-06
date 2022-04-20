const items = document.querySelectorAll(".item");
console.log("Number of categories: ", items.length);

items.forEach((el) => {
  console.log("Category: ", el.firstElementChild.textContent);
  console.log("Elements: ", el.lastElementChild.children.length);
});
