const slideshowelements = document.querySelectorAll(".slideShow-element");
console.log(slideshowelements);
let countElements = 1;
 setInterval(()=>{
  countElements++;
let currentElement = document.querySelector(".current");

currentElement.classList.remove("current");

if(countElements>slideshowelements.length){
  slideshowelements[0].classList.add("current");
  countElements=1;
}else{
  currentElement.nextElementSibling.classList.add("current")
}
 },2000);