// Branching Logic for Proposal
function revealYes() {
  document.querySelector(".interactive-proposal").classList.add("hidden");
  document.querySelector(".yes-reveal").classList.remove("hidden");
  setTimeout(showBackToMemories, 2000);
}

function revealNo() {
  document.querySelector(".interactive-proposal").classList.add("hidden");
  document.querySelector(".no-reveal").classList.remove("hidden");
  setTimeout(showBackToMemories, 2000);
}

function showBackToMemories() {
  document.querySelector(".back-to-memories").classList.remove("hidden");
}

// Floating Elements
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

window.onload = () => {
  createFloatingElements("balloon", 12); // Floating balloons
  createFloatingElements("heart", 20);  // Floating hearts
};