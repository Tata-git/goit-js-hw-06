const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryRef = document.querySelector(".gallery");
// console.log(galleryRef);

const list = images.map((image) => {
  const galleryList = `<li class="img"> <img src="${image.url}" alt="${image.alt}"  width="300px"  height="100%"></li>`;

  return galleryList;
});

galleryRef.insertAdjacentHTML("beforeend", list.join(""));
galleryRef.style.display = "flex";
galleryRef.style.justifyContent = "space-evenly";

console.log(galleryRef);
