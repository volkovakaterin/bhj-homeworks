const sliderItem = document.getElementsByClassName("slider__item");
const sliderItemArr = Array.from(sliderItem);
const sliderArrowNext = document.getElementsByClassName("slider__arrow_next");
const sliderArrowPrev = document.getElementsByClassName("slider__arrow_prev");
let i = 0;

sliderArrowNext[0].onclick = function() {
    slideRight();    
}

sliderArrowPrev[0].onclick = function() {   
    slideLeft();
}

function slideRight() {    
    sliderItemArr[i].classList.remove("slider__item_active");
    ++i;
    checkR();
    sliderItemArr[i].classList.add("slider__item_active");
}

function slideLeft() {   
    sliderItemArr[i].classList.remove("slider__item_active");
    --i;
    checkL();
    sliderItemArr[i].classList.add("slider__item_active");
}

function checkR () {
    if (i === 5) i = 0;
}

function checkL () {
    if (i === -1) i = 4;
}

