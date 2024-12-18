// Reveal Button Logic
document.addEventListener("DOMContentLoaded", () => {
    const revealBtn = document.getElementById('reveal-btn');
    const hiddenMessage = document.querySelector('.hidden-message');
    const gameButton = document.getElementById("friendship-game-btn");

    // Check if these elements exist
    if (revealBtn && hiddenMessage) {
        revealBtn.addEventListener('click', () => {
            hiddenMessage.style.display = 'block'; // Reveal the surprise message
            revealBtn.style.display = 'none'; // Hide the reveal button
            gameButton.style.display = 'block'; // Show the Friendship Game button
        });
    }

    // Function to redirect to the Friendship Game page
    if (gameButton) {
        gameButton.addEventListener('click', () => {
            window.location.href = "game.html"; // Redirects to the game page
        });
    }
});