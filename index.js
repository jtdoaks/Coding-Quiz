let timer = 100;


let quizDiv = document.querySelector("#quiz");
let beginDiv = document.querySelector("#begin");
let cat = document.querySelector("#question");

let timerPlaceholder = document.querySelector("#timer");

let answerButton1 = document.querySelector("#answer1");
let answerButton2 = document.querySelector("#answer2");
let answerButton3 = document.querySelector("#answer3");
let answerButton4 = document.querySelector("#answer4");
let highScores = JSON.parse(localStorage.getItem("high scores")) || [];
let finished = document.querySelector("#finished");


let questions = [{ question: "Which pokemon does Ash get at the start of pokemon?", answers: ["charmander", "squirtle", "bulbasaur", "pikachu"], correctAnswer: "pikachu" },

{ question: "Which pokemon is able to deal fire damage?", answers: ["squirtle", "charmander", "pikachu", "bulbasaur",], correctAnswer: "charmander" },

{ question: "Which pokemon is weak to electric damage?", answers: ["bulbasaur", "charmander", "pikachu", "squirtle"], correctAnswer: "squirtle" },

{ question: "Which pokemon is able to learn razor leaf?", answers: ["squirtle", "pikachu", "bulbasaur", "charmander"], correctAnswer: "bulbasaur" },

{ question: "Which pokemon is blue?", answers: ["bulbasaur", "squirtle", "charmander", "pikachu"], correctAnswer: "squirtle" },

{ question: "Which pokemon evolves with a thunder stone?", answers: ["pikachu", "bulbasaur", "charmander", "squirtle"], correctAnswer: "pickachu" },

{ question: "Which pokemon is able to weak to water damage?", answers: ["charmander", "squirtle", "bulbasaur", "squirtle"], correctAnswer: "charmander" },

{ question: "Which pokemon evoles to ivysaur?", answers: ["bulbasaur", "squirtle", "charmander", "pikachu"], correctAnswer: "bulbasaur" },
]


let currentQuestion = 0
renderQuestion();


function renderQuestion() {

    cat.textContent = questions[currentQuestion].question
    answerButton1.textContent = questions[currentQuestion].answers[0];
    answerButton2.textContent = questions[currentQuestion].answers[1];
    answerButton3.textContent = questions[currentQuestion].answers[2];
    answerButton4.textContent = questions[currentQuestion].answers[3];
}
if (currentQuestion !== questions) {
    gameOver();
}

let startButtonEl = document.querySelector("#start")

startButtonEl.addEventListener("click", startQuiz);

function myFunction() {
    startButtonEl.innerHTML = "Hello World";
}




function startQuiz() {
    document.querySelector("#timerEl").textContent = timer;
    let timerInterval = setInterval(function () {
        timer--
        document.querySelector("#timerEl").textContent = timer
        if (timer <= 0) {
            clearInterval(timerInterval)
           

        }
    }, 1000);

    beginDiv.classList.toggle("hide")
    quizDiv.classList.toggle("hide")
}




quizDiv.addEventListener("click", function (event) {

    if (event.target.matches("button")) {

        if (event.target.innerText === questions[currentQuestion].correctAnswer) {
            console.log("You got it Right!")
        } else {
            console.log("you got it wrong");
            timer -= 5;
        }

        currentQuestion++
        renderQuestion();
    }

})

gameOver();
function gameOver() {
    document.querySelector("#finished")
}

// page that says quiz is Over. highscores, inititials.
// type inititals in and see their final score.