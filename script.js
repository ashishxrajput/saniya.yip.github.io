// Reveal Yes or No Section
function revealYes() {
  document.querySelector(".interactive-start").classList.add("hidden");
  document.querySelector(".yes-reveal").classList.remove("hidden");
  showAdditionalSections();
}

function revealNo() {
  document.querySelector(".interactive-start").classList.add("hidden");
  document.querySelector(".no-reveal").classList.remove("hidden");
  showAdditionalSections();
}

// Show Additional Sections
function showAdditionalSections() {
  setTimeout(() => {
    document.querySelector(".photos-videos").classList.remove("hidden");
    document.querySelector(".surprise-btn").classList.remove("hidden");
  }, 2000);
}

// Create Floating Decorations
function createFloatingElements(className, count) {
  const container = document.getElementById("floating-decorations");

  for (let i = 0; i < count; i++) {
    const element = document.createElement("div");
    element.classList.add(className);
    element.style.left = Math.random() * 100 + "vw";
    element.style.animationDelay = Math.random() * 5 + "s";
    element.style.animationDuration = Math.random() * 10 + 5 + "s";
    container.appendChild(element);
  }
}

// Initialize Decorations
window.onload = () => {
  createFloatingElements("balloon", 15);
  createFloatingElements("heart", 10);
  createFloatingElements("flower", 8);
};

// Circular Slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - index)}%)`;
  });
}

document.querySelector(".btn-next").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

document.querySelector(".btn-prev").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});