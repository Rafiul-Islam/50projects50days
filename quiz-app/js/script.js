const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.querySelector("#submit");
  const reloadButton = document.querySelector("#reload");

  const quizContainer = document.querySelector(".quiz-container");
  const resultContainer = document.querySelector(".result-container");

  let currentQuestionNumber = 0;
  let currectAnswers = 0;
  let submitedAnswers = [];

  loadQuiz();

  function loadQuiz() {
    resetAnswer();

    document.querySelector("#question").textContent =
      quizData[currentQuestionNumber].question;

    document.querySelector("#a_text").textContent =
      quizData[currentQuestionNumber].a;
    document.querySelector("#b_text").textContent =
      quizData[currentQuestionNumber].b;
    document.querySelector("#c_text").textContent =
      quizData[currentQuestionNumber].c;
    document.querySelector("#d_text").textContent =
      quizData[currentQuestionNumber].d;
  }

  function resetAnswer() {
    document
      .querySelectorAll(".answer")
      .forEach((ans) => (ans.checked = false));
  }

  function getsubmitedAnswers() {
    document.querySelectorAll(".answer").forEach((ans) => {
      if (ans.checked) {
        submitedAnswers.push(ans.nextElementSibling.textContent);
      }
    });
  }

  function processResult() {
    for (let i = 0; i < quizData.length; i++) {
      const obj = quizData[i];
      const ans = obj.correct;
      if (obj[ans] === submitedAnswers[i]) {
        currectAnswers++;
      }
    }
  }

  function reset() {
    currentQuestionNumber = 0;
    submitedAnswers = [];
    currectAnswers = 0;
  }

  submitButton.addEventListener("click", function () {
    getsubmitedAnswers();

    if (currentQuestionNumber + 1 === submitedAnswers.length) {
      resetAnswer();
      currentQuestionNumber++;
      if (currentQuestionNumber < quizData.length) {
        loadQuiz();
      } else {
        processResult();

        resultContainer.querySelector("#totalQuestions").textContent =
          quizData.length;
        resultContainer.querySelector("#totalRightAnswers").textContent =
          currectAnswers;

        quizContainer.classList.add("hide");
        resultContainer.classList.remove("hide");
      }
    }
  });

  reloadButton.addEventListener("click", function () {
    reset();
    loadQuiz();
    quizContainer.classList.remove("hide");
    resultContainer.classList.add("hide");
  });
});
