// Existing code for mobile navigation
const btnNavEl = document.querySelector(".mobile_menu");
const headerEl = document.querySelector("header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("open_nav");
});

// Existing code for sticky navigation
const heroSectionEl = document.querySelector(".hero-section");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-75px",
  }
);
obs.observe(heroSectionEl);

// Existing code for service section text
const readMoreBtns = document.querySelectorAll(".service-typedtext_box");
readMoreBtns.forEach((readMore) => {
  readMore.addEventListener("click", function () {
    readMore.classList.toggle("show-text");
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const mainCarouselBox = document.querySelector(".testimonial-carousal");
  const carouselContent = mainCarouselBox.querySelector('.carousel-content');
  const slides = carouselContent.querySelectorAll('.carousel-slide');
  const prevCarouselBtn = mainCarouselBox.querySelector(".prev");
  const nextCarouselBtn = mainCarouselBox.querySelector(".next");
  const currentSlideBox = document.querySelector(".carousel-indicators");

  let currentIndex = 0;

  // Clear existing indicators and create new ones
  currentSlideBox.innerHTML = '';
  slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot_indicator');
      if (index === 0) dot.classList.add('current_slide');
      dot.addEventListener('click', () => goToSlide(index));
      currentSlideBox.appendChild(dot);
  });

  function updateCarousel() {
      carouselContent.style.transform = `translateX(-${currentIndex * 100}%)`;
      updateIndicators();
  }

  function updateIndicators() {
      document.querySelectorAll('.dot_indicator').forEach((indicator, index) => {
          indicator.classList.toggle('current_slide', index === currentIndex);
      });
  }

  function goToSlide(index) {
      currentIndex = index;
      updateCarousel();
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
  }

  function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel();
  }

  nextCarouselBtn.addEventListener('click', nextSlide);
  prevCarouselBtn.addEventListener('click', prevSlide);

  // Initial setup
  updateCarousel();
});

const lightbulb = document.getElementById('lightbulb');

lightbulb.addEventListener('mouseover', function() {
  lightbulb.src = 'img/bulb-on.png'; // Image when bulb is on
});

lightbulb.addEventListener('mouseout', function() {
  lightbulb.src = 'img/bulb-off.png'; // Image when bulb is off
});