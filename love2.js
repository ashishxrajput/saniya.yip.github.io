const heart = document.getElementById("heart");
const stars = document.querySelectorAll(".star");
const messageCard = document.getElementById("message-card");
const messageContent = document.getElementById("message-content");
const finalMessage = document.querySelector(".hidden");

let collectedStars = 0;

// Move the heart using buttons
function moveHeart(direction) {
  const heartStyle = window.getComputedStyle(heart);
  let currentTop = parseInt(heartStyle.top);
  let currentLeft = parseInt(heartStyle.left);

  switch (direction) {
    case "up":
      if (currentTop > 0) heart.style.top = currentTop - 20 + "px";
      break;
    case "down":
      if (currentTop < 280) heart.style.top = currentTop + 20 + "px"; // Prevent going out of view
      break;
    case "left":
      if (currentLeft > 0) heart.style.left = currentLeft - 20 + "px";
      break;
    case "right":
      if (currentLeft < 280) heart.style.left = currentLeft + 20 + "px"; // Prevent going out of view
      break;
  }

  checkCollision();
}

// Check collision with stars
function checkCollision() {
  stars.forEach((star) => {
    const heartRect = heart.getBoundingClientRect();
    const starRect = star.getBoundingClientRect();

    if (
      heartRect.left < starRect.right &&
      heartRect.right > starRect.left &&
      heartRect.top < starRect.bottom &&
      heartRect.bottom > starRect.top &&
      star.style.display !== "none" // Avoid recounting already collected stars
    ) {
      star.style.display = "none"; // Hide the star
      collectedStars++;

      showStarMessage(star.id);

      if (collectedStars === stars.length) {
        finalMessage.classList.remove("hidden"); // Show final message
      }
    }
  });
}

// Show a message for each star collected
function showStarMessage(starId) {
  const messages = {
    "star-1": "⭐ You light up my world! 💖",
    "star-2": "⭐ Your smile is my favorite thing. 😊",
    "star-3": "⭐ You make everything beautiful! 🌹",
    "star-4": "⭐ You are my reason to be happy. 🌟",
    "star-5": "⭐ My heart belongs to you forever! 💍",
    "star-6": "⭐ You are the best thing in my life. 💕",
    "star-7": "⭐ You make every day special. 🌸",
    "star-8": "⭐ I love everything about you. 💗",
    "star-9": "⭐ You are my brightest star. ✨",
    "star-10": "⭐ I want to spend forever with you. 🥰",
  };

  messageContent.innerHTML = messages[starId];
  messageCard.classList.remove("hidden");
}

// Hide the message card when clicking outside
messageCard.addEventListener("click", (event) => {
  if (event.target === messageCard) {
    messageCard.classList.add("hidden");
  }
});