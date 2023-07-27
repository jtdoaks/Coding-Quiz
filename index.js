//  let timer = 90

// let timerId = setInterval(function () {

//     timer -= 1
//     console.log(timer);

// }, 1000)

let quizDiv = document.querySelector("#quiz");
let questionButton1 = document.querySelector("#answer1");



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



quizDiv.addEventListener("click", function (event) {

    if (event.target.matches("button")) {

        console.log("clicked!")
        console.log("value" + event.target.innerText)
        currentQuestion++
        renderQuestion();
    }

})
