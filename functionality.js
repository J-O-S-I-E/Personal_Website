// Navigation functionality
function toggleMenu() {
  const navMenu = document.getElementById('navMenu');
  navMenu.classList.toggle('active');
}

// Slideshow functionality
let slideIndex = 1;
showSlide(slideIndex);

function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  const slides = document.getElementsByClassName('slide');
  const dots = document.getElementsByClassName('dot');
  
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  
  for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active');
  }
  
  for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active');
  }
  
  slides[slideIndex - 1].classList.add('active');
  dots[slideIndex - 1].classList.add('active');
}

// Auto slideshow
function autoSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

// Start auto slideshow
setInterval(autoSlide, 4000);

// Back to top button functionality
window.addEventListener('scroll', function() {
  const backToTop = document.getElementById('backToTop');
  if (window.pageYOffset > 300) {
      backToTop.style.display = 'flex';
  } else {
      backToTop.style.display = 'none';
  }
});

function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}
