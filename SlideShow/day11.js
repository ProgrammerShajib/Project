const slide_elements = document.querySelectorAll(".slideShow-element");
console.log(slide_elements);
let slideCount =1;
setInterval(()=>{
  slideCount++;
const currentElement =document.querySelector(".current");
// console.log(currentElement);
 
 
 currentElement.classList.remove("current");
 
 
 if(slideCount>slide_elements.length){
   slide_elements[1].classList.add("current");
   slideCount=1;
  }else{
    currentElement.nextElementSibling.classList.add("current")
  }
 
},2000)


// const slide_elements = document.querySelectorAll(".slideShow-element");
// console.log(slide_elements);
// let slideCount = 1;

// setInterval(() => {
//   const currentElement = document.querySelector(".current");

//   const current2 = "current1";
//   const current1 = currentElement.classList.contains(current2);

//   currentElement.classList.remove("current");

//   if (slideCount > slide_elements.length && current2 !== current1) {
//     slide_elements[0].classList.add("current");
//     slideCount = 1;
//   } else {
//     if (currentElement.nextElementSibling) {
//       currentElement.nextElementSibling.classList.add("current");
//     } else {
//       // If the current element is the last one, go back to the first one
//       slide_elements[0].classList.add("current");
//       slideCount = 1;
//     }
//   }

//   slideCount++;
// }, 2000);

