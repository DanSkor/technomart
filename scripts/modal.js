let sliders = Array.from(document.querySelectorAll('.site-nav__slider-item'));
let prevButtons = Array.from(document.querySelectorAll('.prev-button'));
let nextButtons = Array.from(document.querySelectorAll('.next-button'));

let sliderShow = (slide) => {
  for (let i=0 ; i < sliders.length; i++) {
    sliders[i].classList.remove('slider-active');
  }
  sliders[slide].classList.add('slider-active');
}

let prevSlide = () => {
  let currentIndex = sliders.findIndex(index => index.classList.contains('slider-active'));
  let newIndex = currentIndex - 1;
  if (newIndex < 0) {
    newIndex = sliders.length - 1;
  }
  sliderShow(newIndex);
}

let nextSlide = () => {
  let currentIndex = sliders.findIndex(index => index.classList.contains('slider-active'));
  let newIndex = currentIndex + 1;
  if (newIndex == sliders.length) {
    newIndex = 0;
  }
  sliderShow(newIndex);
}

for (let prevButton of prevButtons) {
  prevButton.addEventListener('click', prevSlide)
}

for (let nextButton of nextButtons) {
  nextButton.addEventListener('click', nextSlide)
}
