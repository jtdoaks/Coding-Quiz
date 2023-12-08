let timer = 100;
let timerInterval;
let quizDiv = document.querySelector("#quiz");
let beginDiv = document.querySelector("#begin");
let cat = document.querySelector("#question");

let timerPlaceholder = document.querySelector("#timer");
let inputs = document.querySelector("#inputs");
let answerButton1 = document.querySelector("#answer1");
let answerButton2 = document.querySelector("#answer2");
let answerButton3 = document.querySelector("#answer3");
let answerButton4 = document.querySelector("#answer4");
let finished = document.querySelector("#finished");
let finalScoreEl = document.querySelector("#finalScore");
let finalScore = 0;
let highScores = JSON.parse(localStorage.getItem("high-scores")) || [];

let questions = [{ question: "Which pokemon does Ash get to start pokemon?", answers: ["Bulbasaur", "Squirtle", "Charmander", "Pikachu"], correctAnswer: "Pikachu" },

{ question: "Which pokemon is able to deal fire damage?", answers: ["Bulbasaur", "Squirtle", "Charmander", "Pikachu"], correctAnswer: "Charmander" },

{ question: "Which pokemon is weak to electric damage?", answers: ["Bulbasaur", "Squirtle", "Charmander", "Pikachu"], correctAnswer: "Squirtle" },

{ question: "Which pokemon is able to learn Razor Leaf?", answers: ["Bulbasaur", "Squirtle", "Charmander", "Pikachu"], correctAnswer: "Bulbasaur" },

{ question: "Which pokemon is blue?", answers: ["Bulbasaur", "Squirtle", "Charmander", "Pikachu"], correctAnswer: "Squirtle" },

{ question: "Which pokemon evolves with a Thunder Stone?", answers: ["Bulbasaur", "Squirtle", "Charmander", "Pikachu"], correctAnswer: "pickachu" },

{ question: "Which pokemon is able to weak to water damage?", answers: ["Bulbasaur", "Squirtle", "Charmander", "Pikachu"], correctAnswer: "Charmander" },

{ question: "Which pokemon evoles to Ivysaur?", answers: ["Bulbasaur", "Squirtle", "Charmander", "Pikachu"], correctAnswer: "Bulbasaur" },
];


let currentQuestion = 0;
renderQuestion();


function renderQuestion() {
    if (currentQuestion >= questions.length) {
        clearInterval(timerInterval);
        console.log("game over")
        finishedEl.classList.toggle("hide")
        quizDiv.classList.toggle("hide")
        inputs.classList.toggle("hide")
        finalScoreEl.classList.toggle("hide")
        finalScoreEl.textContent = timer;
        return;
    };

    cat.textContent = questions[currentQuestion].question
    answerButton1.textContent = questions[currentQuestion].answers[0];
    answerButton2.textContent = questions[currentQuestion].answers[1];
    answerButton3.textContent = questions[currentQuestion].answers[2];
    answerButton4.textContent = questions[currentQuestion].answers[3];
}


let startButtonEl = document.querySelector("#start")

startButtonEl.addEventListener("click", startQuiz);


function startQuiz() {
    document.querySelector("#timerEl").textContent = timer;
    timerInterval = setInterval(function () {
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
            console.log("You got it Right!");
            finalScore++;

        } else {
            console.log("you got it wrong");
            timer -= 5;
        }

        currentQuestion++
        renderQuestion();
    }

})

inputs.addEventListener("submit", function (event) {
    event.preventDefault();
    let userInitials = document.querySelector("#userInitials").value;
    let user = { initials: userInitials, score: timer }
    highScores.push(user);
    localStorage.setItem("high-scores", JSON.stringify(highScores))
    inputs.classList.toggle("hide");
    leaderboard.classList.toggle("hide");
    for (let i = 0; i < highScores.length; i++) {
        const element = highScores[i];
        let li = document.createElement("li");
        li.textContent = "player: " + element.initials + " -- score: " + element.score;
        leaderboard.append(li);
    }
})

viewHighScores.addEventListener('click', function (event){
    event.preventDefault();
    finishedEl.classList.toggle("hide");
    leaderboard.classList.toggle("hide");
    for (let i = 0; i < highScores.length; i++) {
        const element = highScores[i];
        let li = document.createElement("li");
        li.textContent = "player: " + element.initials + " -- score: " + element.score;
        leaderboard.append(li);
    }
})