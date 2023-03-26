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
    question: "Quelles oeuvres Claude Debus=ssy a-t-il dédié à sa fille ?",
    a: "'Clair de lune' et 'Dans le jardin'",
    b: "'Children's corner' et 'La boîte à joujou'",
    c: "'La belle aux bois dormant' et 'Rêverie'",
    d: "'Beau soir' et 'Les baisers d'amour'",
    correct: "b",
  },
];

const question_el = document.getElementById("question");
const answer_a = document.getElementById("a");
const answer_b = document.getElementById("b");
const answer_c = document.getElementById("c");
const answer_d = document.getElementById("d");
const next_btn = document.getElementById("next");

let current = 0;
let score = 0;

const loadQuiz = () => {
  const currentQuiz = quizData[current];

  question_el.innerText = currentQuiz.question;
  answer_a.innerText = currentQuiz.a;
  answer_b.innerText = currentQuiz.b;
  answer_c.innerText = currentQuiz.d;
  answer_d.innerText = currentQuiz.d;
};

loadQuiz();
