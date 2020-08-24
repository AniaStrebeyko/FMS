const carousel = document.getElementById('carousel');
const movable = document.getElementsByClassName('carousel__viewport')[0]

const totalNumberOfSlides = movable.getElementsByTagName('img').length;
let currentSlideIndex = 0;

function slideLeft() {
  if (currentSlideIndex === totalNumberOfSlides-1) {
    currentSlideIndex = 0;
    return
  }
    movable.style.transform = `translateX(-${currentSlideIndex+1}00%)`;
    currentSlideIndex++;
}

const interval = setInterval(slideLeft, 4000)