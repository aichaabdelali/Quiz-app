const quizData = [
  {
    question: "A Vienne, le compositeur Joseph Haydn a été le professeur de...",
    a: "Wolfgang Amadeus Mozart",
    b: "Franz Schubert",
    c: "Ludwig Van Beethoven",
    d: "Frédéric Chopin",
    correct: "c",
  },
  {
    question:
      "Quelle sonate pour piano de Wolfgang Amadeus Mozart est aussi appelé ?",
    a: "Sonate n°6 K. 284",
    b: "Sonate n°8 K. 310",
    c: "Sonate n°12 K. 332",
    d: "Sonate n°16 K.545",
    correct: "d",
  },
  {
    question:
      "A quel âge Ludwig Van Beethoven a commencé à apprendre la musique ?",
    a: "5 ans",
    b: "6 ans",
    c: "7 ans",
    d: "8 ans",
    correct: "a",
  },
  {
    question:
      "Quelle symphonie a fait passé la musique de Ludwig Van Beethoven de Classisme à romantisme ?",
    a: "Symphone n°3",
    b: "Symphonie n°5",
    c: "Symphonie n°7",
    d: "Symphonie n°9",
    correct: "a",
  },
  {
    question: "Quelles oeuvres Claude Debussy a-t-il dédié à sa fille ?",
    a: "'Clair de lune' et 'Dans le jardin'",
    b: "'Children's corner' et 'La boîte à joujou'",
    c: "'La belle aux bois dormant' et 'Rêverie'",
    d: "'Beau soir' et 'Les baisers d'amour'",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const answer_a = document.getElementById("a_text");
const answer_b = document.getElementById("b_text");
const answer_c = document.getElementById("c_text");
const answer_d = document.getElementById("d_text");
const next_btn = document.getElementById("next");

let current = 0;
let score = 0;

function deselectAnswer() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function loadQuiz() {
  deselectAnswer();
  const currentQuiz = quizData[current];

  questionEl.innerText = currentQuiz.question;
  answer_a.innerText = currentQuiz.a;
  answer_b.innerText = currentQuiz.b;
  answer_c.innerText = currentQuiz.c;
  answer_d.innerText = currentQuiz.d;
}

loadQuiz();

function selectedAnswer() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function displayScore() {
  const score_container = document.createElement("div");
  score_container.classList.add("score-container");
  quiz.innerHTML = "";
  if (score >= 3) {
    score_container.innerHTML = `
    <span class="score">Génial! Ton score est de ${score}/${quizData.length}</span>
    <iframe src="https://giphy.com/embed/xT5LMHxhOfscxPfIfm" width="280" height="162" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    <button class="reload" onclick="location.reload()"> Réessayer </button>
    `;
  } else {
    score_container.innerHTML = `
    <span class="score">Ton score n'est que de ${score}/${quizData.length}</span>
    <iframe src="https://giphy.com/embed/BEob5qwFkSJ7G" width="280" height="155" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    <button class="reload" onclick="location.reload()"> Réessayer </button>
    `;
  }

  quiz.appendChild(score_container);
}

next_btn.addEventListener("click", () => {
  const answer = selectedAnswer();

  if (answer) {
    if (answer === quizData[current].correct) {
      score++;
      console.log(score);
    }

    current++;

    if (current < quizData.length) {
      loadQuiz();
    } else {
      displayScore();
    }
  }
});
