function initCarousel(seconds) {
  const carousel = document.getElementById('carousel');
  const movable = carousel.getElementsByClassName('carousel__tray')[0]

  const totalNumberOfSlides = 10;
  // tworzymy divy, "obrazki" w JS, inaczej mielibyśmy fatalne powtórzenia.
  for (let i = 0; i < 10; i++ ) {
    div = document.createElement('div');
    staticImgIndex = i + 1;
    formattedIndex = staticImgIndex < 10 ?  '0' + staticImgIndex : staticImgIndex;
    div.style.backgroundImage = `linear-gradient(rgba(255,255,255, 0.3), rgba(255,255,255,1)), url("../static/${formattedIndex}.png")`
    movable.append(div)
  }
  let currentSlideIndex = 0;

  function slideLeft() {
    if (currentSlideIndex === totalNumberOfSlides-1) {
      currentSlideIndex = 0;
      return
    }
      movable.style.transform = `translateX(-${currentSlideIndex+1}0%)`;
      currentSlideIndex++;
  }

const interval = setInterval(slideLeft, seconds*1000 )
}

initCarousel(4)