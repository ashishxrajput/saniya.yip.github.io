document.addEventListener("DOMContentLoaded", () => {
    const startGameBtn = document.getElementById("start-game-btn");
    const gameSection = document.getElementById("game-section");
    const cardsContainer = document.getElementById("cards-container");
    const restartGameBtn = document.getElementById("restart-game-btn");
    const congratulationsSection = document.getElementById("congratulations-section");
    const restartBtn = document.getElementById("restart-btn");

    const cardImages = [
        'hinata1.jpg', 'hinata1.jpg',
        'hinata2.jpg', 'hinata2.jpg',
        'naruto1.jpg', 'naruto1.jpg',
        'naruto2.jpg', 'naruto2.jpg',
        'hinata4.jpg', 'hinata4.jpg',
        'hinata3.jpg', 'hinata3.jpg'
    ];

    let flippedCards = [];
    let matchedCards = [];

    // Shuffle the cards
    function shuffle(array) {
        let currentIndex = array.length, randomIndex, temporaryValue;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    // Create card elements
    function createCards() {
        shuffledCards = shuffle(cardImages);
        shuffledCards.forEach(image => {
            const card = document.createElement('div');
            card.classList.add('card');

            const cardBack = document.createElement('div');
            cardBack.classList.add('card-back');
            cardBack.innerHTML = 'Flip Me';

            const cardImage = document.createElement('img');
            cardImage.src = image;

            card.appendChild(cardBack);
            card.appendChild(cardImage);
            card.addEventListener('click', flipCard);

            cardsContainer.appendChild(card);
        });
    }

    // Flip card function
    function flipCard(event) {
        const clickedCard = event.target.closest('.card');
        if (flippedCards.length < 2 && !clickedCard.classList.contains('flipped') && !matchedCards.includes(clickedCard)) {
            clickedCard.classList.add('flipped');
            flippedCards.push(clickedCard);
            if (flippedCards.length === 2) {
                checkMatch();
            }
        }
    }

    // Check if two flipped cards match
    function checkMatch() {
        if (flippedCards[0].innerHTML === flippedCards[1].innerHTML) {
            matchedCards.push(...flippedCards);
            flippedCards = [];
            if (matchedCards.length === cardImages.length) {
                showCongratulations();
            }
        } else {
            setTimeout(() => {
                flippedCards.forEach(card => card.classList.remove('flipped'));
                flippedCards = [];
            }, 1000);
        }
    }

    // Show Congratulations message
    function showCongratulations() {
        gameSection.style.display = 'none';
        congratulationsSection.style.display = 'block';
    }

    // Start the game
    startGameBtn.addEventListener('click', () => {
        document.getElementById('welcome-message').style.display = 'none';
        gameSection.style.display = 'block';
        createCards();
    });

    // Restart the game
    restartGameBtn.addEventListener('click', () => {
        matchedCards = [];
        flippedCards = [];
        cardsContainer.innerHTML = '';
        createCards();
        gameSection.style.display = 'block';
        congratulationsSection.style.display = 'none';
    });

    // Restart game after congratulations
    restartBtn.addEventListener('click', () => {
        matchedCards = [];
        flippedCards = [];
        cardsContainer.innerHTML = '';
        createCards();
        congratulationsSection.style.display = 'none';
        gameSection.style.display = 'block';
    });
});