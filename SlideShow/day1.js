const slideshowelements = document.querySelectorAll(".slideShow-element");
console.log(slideshowelements);

setInterval(() => {
  let currentElement = document.querySelector(".current");
  currentElement.classList.remove("current");
  currentElement.nextElementSibling.classList.add("current");
}, 2000);

// const slideshowelements = document.querySelectorAll(".slideShow-element");
// console.log(slideshowelements);
// // let countElements = 1;
// setInterval(() => {
//   // countElements++;
//   let currentElement = document.querySelector(".current");

//   currentElement.classList.remove("current");

//   currentElement.nextElementSibling.classList.add("current");
// }, 2000);
