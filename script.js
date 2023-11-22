    const arrowLeft = document.getElementById('arrow-left');
    const arrowRight = document.getElementById('arrow-right');
    const slides = document.querySelectorAll('.slide');

    let currentSlide = 0;

    arrowLeft.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    arrowRight.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    showSlide(0);
