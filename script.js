let slidePosition = 0;
const slides= document.getElementsByClassName('item');
const totalSlides = slides.length;




document.getElementById('next').addEventListener("click",function() {
  console.log("ff");
  moveToPrevSlide();
 },false);

 document.getElementById('prev').addEventListener("click", function(){
    console.log("dd");
    moveToPrevSlide();
  },false);

function updateSlidePosistion(){
  for (let slide of slides) {
    slide.classList.remove ('item-show');
    slide.classList.add('item-hide');
  }

  slides[slidePosition].classList.add('item-show');
}

function moveToNextSlide(){
  if (slidePosition === totalSlides - 1 ){
    slidePosition = 0;
  } else{
    slidePosition++;
  }

  updateSlidePosistion();
}
function moveToPrevSlide(){
  if(slidePosition === 0){
    slidePosition = totalSlides -1;
  } else{
    slidePosition--;
}
updateSlidePosistion();
}