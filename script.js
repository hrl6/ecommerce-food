const menuToggle = document.querySelector(`.toggle`);
const navigation = document.querySelector(`.navigator`);

menuToggle.addEventListener(`click`, () => {
    menuToggle.classList.toggle(`active`);
    navigation.classList.toggle(`active`);
});


const slides = document.querySelectorAll(`.slides`);
const next = document.querySelector(`.next`);
const prev = document.querySelector(`.previous`);
let i = 0;

function activeSlides(slide){
    for (const slide of slides){
        slide.classList.remove(`default`);
    }
    slides[slide].classList.add(`default`);
};

next.addEventListener(`click`, () => {
    if(i === slides.length - 1){
        i = 0;
    } else {
        i++;
    }
    activeSlides(i);
});


prev.addEventListener(`click`, () => {
    if(i === 0){
        i = slides.length - 1;
    } else {
        i--;
    }
    activeSlides(i);
});