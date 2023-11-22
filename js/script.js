let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index < 0) {
    currentSlide = slides.length - 1;
  } else if (index >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }

  slides.forEach((slide, i) => {
    if (i === currentSlide) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Initial display
document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
});

// Inisialisasi autoslide dengan interval 2 detik
setInterval(autoSlide, 2000);

// Initial display
document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
});