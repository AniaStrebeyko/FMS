console.log('hello')

const carousel = document.getElementById('carousel');
const movable = document.getElementsByClassName('carousel__viewport')[0]

let currentActiveSlide = 0;

function slideLeft() {
  console.log('hi from slideLeft')
  // const first = carousel.children[0];
  // first.classList.add('slide-left');
  // first.addEventListener('animationend', function() {

  // })
  const images = carousel.children;
  const widthToSide = carousel.children[0].width;
  movable.classList.add('slide-left');
  movable.addEventListener('ontransitionend', function() {
    movable.classList.remove('slide-left')
  })
}

const interval = setInterval(slideLeft, 4000)