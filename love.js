let currentPosition = 5; // Start at cell-5
const flowerPosition = 3; // Target position

// Move the Heart
function moveHeart(direction) {
  const maze = document.getElementById("maze");
  const heart = maze.querySelector(".heart");

  // Calculate new position
  let newPosition = currentPosition;

  if (direction === "up" && currentPosition > 2) {
    newPosition -= 3;
  } else if (direction === "down" && currentPosition < 6) {
    newPosition += 3;
  } else if (direction === "left" && currentPosition % 3 !== 0) {
    newPosition -= 1;
  } else if (direction === "right" && currentPosition % 3 !== 2) {
    newPosition += 1;
  }

  // Update position if valid
  if (newPosition !== currentPosition) {
    heart.classList.remove("heart");
    maze.querySelector(`#cell-${newPosition}`).classList.add("heart");
    currentPosition = newPosition;

    // Check if flower is reached
    if (currentPosition === flowerPosition) {
      document.querySelector(".final-message").classList.remove("hidden");
    }
  }
}