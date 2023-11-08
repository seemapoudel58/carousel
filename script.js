const sliderImages = document.querySelectorAll('.slide');
const arrowLeft = document.querySelector('#arrow-left');
const arrowRight = document.querySelector('#arrow-right');
let current = 0;

function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

function startSlide() {
  reset();
  sliderImages[current].style.display = 'block';
}

//show prev
function slideLeft() {
  if (current === 0) {
    current = sliderImages.length - 1;
  } else {
    current--;
  }
  reset();
  sliderImages[current].style.display = 'block';
}

function slideRight() {
  if (current === sliderImages.length - 1) {
    current = 0;
  } else {
    current++;
  }
  reset();
  sliderImages[current].style.display = 'block';
}

arrowLeft.addEventListener('click', slideLeft);

arrowRight.addEventListener('click', slideRight);

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    slideLeft();
  } else if (event.key === 'ArrowRight') {
    slideRight();
  }
});

startSlide();

