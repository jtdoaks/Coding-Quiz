//  let timer = 90

// let timerId = setInterval(function () {

//     timer -= 1
//     console.log(timer);

// }, 1000)

let quizDiv = document.querySelector("#quiz");
let beginDiv = document.querySelector("#begin");
let questionButton1 = document.querySelector("#answer1");
let highScores = JSON.parse(localStorage.getItem("high scores")) || [];



let questions = [{ question: "Which pokemon does Ash get at the start of pokemon?", answers: ["charmander", "squirtle", "bulbasaur", "pikachu"], correctAnswer: "pikachu" },

{ question: "Which pokemon is able to deal fire damage?", answers: [ "squirtle", "charmander","pikachu", "bulbasaur",], correctAnswer: "charmander" },

{ question: "Which pokemon is weak to electric damage?", answers: ["bulbasaur", "charmander", "pikachu", "squirtle"], correctAnswer: "squirtle" },

{ question: "Which pokemon is able to learn razor leaf?", answers: ["squirtle", "pikachu", "bulbasaur", "charmander"], correctAnswer: "bulbasaur" },

{ question: "Which pokemon is blue?", answers: ["bulbasaur",  "squirtle", "charmander", "pikachu"], correctAnswer: "squirtle" },

{ question: "Which pokemon evolves with a thunder stone?", answers: ["bulbasaur",  "pikachu", "charmander", "pikachu"], correctAnswer: "pickachu" },

{ question: "Which pokemon is able to weak to water damage?", answers: ["charmander", "squirtle", "bulbasaur", "squirtle"], correctAnswer: "charmander" },

{ question: "Which pokemon evoles to ivysaur?", answers: ["bulbasaur", "squirtle", "charmander", "pikachu"], correctAnswer: "bulbasaur" },
]


let currentQuestion = 0
renderQuestion();

function renderQuestion() {

    console.log(questions[currentQuestion].question)
    questionButton1. textContent = questions[currentQuestion].answers[0];
    console.log(questions[currentQuestion].answers[1])
    console.log(questions[currentQuestion].answers[2])
    console.log(questions[currentQuestion].answers[3])
    console.log("correct Answer " + questions[currentQuestion].correctAnswer)

}
// trying to create start button
document.addEventListener("click", myFunction);

function myFunction() {
    document.querySelector("#start").innerHTML = "Hello World";
  }


  
beginDiv.addEventListener("click", function startQuiz() {
    
})

function startQuiz() {
    console.log("doing something")
}

// trying to create start button


quizDiv.addEventListener("click", function (event) {

    if (event.target.matches("button")) {

        console.log("clicked!")
        console.log("value " + event.target.innerText)
        console.log("correct answer" + questions[currentQuestion].correctAnswer);

        currentQuestion++
        renderQuestion();
    }

})



// some button that saves
// localStorage.setItem("high scores", JSON.stringify([{"initials": "JTD", "score" : "80"}]))