const questions = [
  {
    question: "Where did we first meet? 💞",
    answers: ["At a park", "On Instagram", "At a café", "At a wedding"],
    correct: 2,
  },
  {
    question: "What is my favorite thing about you? 🌹",
    answers: ["Your smile", "Your kindness", "Your voice", "Everything"],
    correct: 4,
  },
  {
    question: "What's my favourite",
    answers: [
      "Daal Chawal",
      "Momos",
      "doldappe 😄",
      "you😋",
    ],
    correct: 4,
  },
  {
    question: "How do I describe our relationship? 🥰",
    answers: [
      "Magical and full of love",
      "A perfect journey",
      "A bond like no other",
      "All of the above",
    ],
    correct: 4,
  },
  {
    question: "What’s my dream for us in the future? 💍",
    answers: [
      "Travel the world together",
      "Achieve all our goals",
      "Build a life full of love and happiness",
      "All of the above",
    ],
    correct: 3,
  },
];

let currentQuestion = 0;
let score = 0;

function startGame() {
  document.getElementById("start-btn").classList.add("hidden");
  document.getElementById("question-container").classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const questionElement = document.getElementById("question");
  const buttons = document.querySelectorAll(".answers button");
  const current = questions[currentQuestion];

  questionElement.textContent = current.question;
  buttons.forEach((button, index) => {
    button.textContent = current.answers[index];
  });
}

function checkAnswer(index) {
  if (index === questions[currentQuestion].correct) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    endGame();
  }
}

function endGame() {
  document.getElementById("question-container").classList.add("hidden");
  document.getElementById("result-container").classList.remove("hidden");
  document.getElementById("score").textContent = score;
  document.getElementById("total").textContent = questions.length;

  const message = document.getElementById("final-message");
  if (score === questions.length) {
    message.textContent = "You know me so well, Saniya! You're amazing! 🌟";
  } else if (score > questions.length / 2) {
    message.textContent =
      "We know each other well, but there's always more to discover! 🥰";
  } else {
    message.textContent =
      "It’s the journey that matters, and we’re in it together! 💕";
  }
}
