let randNum = Math.floor(Math.random()*100)
let currentGuess = null
let timeOuts = []
let locked = false
let highScore = Number(localStorage.getItem("highScore")) || null
let initialScore = 100



const submitBtn = document.getElementById("submit");
const guessInput = document.getElementById("guessInput");
const lastGuessNum = document.getElementById("lastGuessNum")
const higherlower = document.getElementById("higherlower")
const secretNumber = document.getElementById("secretNumber")
const scoreNumber = document.getElementById("scoreNumber")
const gameTag = document.getElementById("gameTag")
const highScoreDisplay = document.getElementById("highScoreDisplay")
const score = document.getElementById("score")
const delBtn = document.getElementById("delBtn")

highScoreDisplay.textContent = highScore ?? "0"

delBtn.addEventListener("click", () => {
    localStorage.removeItem("highScore")
    highScore = null
    highScoreDisplay.textContent = "0"
    
})

submitBtn.addEventListener("click", () => {
    if (locked) return;
    locked = true
    currentGuess = Number(guessInput.value)
    lastGuessNum.textContent = currentGuess
    guessInput.value = ""
    scoreNumber.textContent = initialScore
    compare()
})


function gameStatusCheck (){
     {
        locked = true
        score.classList.add("gameOverText")
        scoreNumber.classList.add("gameOverText")
        secretNumber.classList.add("gameOver")
        gameTag.classList.add("gameOverText")
        gameTag.textContent = "Game Over !"
        setTimeout(()=>{
            gameTag.textContent = "Guess My Number !"
            
            locked = false
            initialScore = 100
            scoreNumber.textContent = 100
            lastGuessNum.textContent = "..."
            score.classList.remove("gameOverText")
            scoreNumber.classList.remove("gameOverText")
            secretNumber.classList.remove("gameOver")
            gameTag.classList.remove("gameOverText")
        },3000)
        return;
    }
}

function compare () {
 
    if (currentGuess === randNum) {
        if (highScore === null || initialScore > highScore){
            highScore = initialScore
            localStorage.setItem("highScore", highScore)
            highScoreDisplay.textContent = highScore
        }
        
        higherlower.textContent = "Correct";
        gameTag.textContent = `You Win! You score ${highScore}`
        secretNumber.textContent = currentGuess
        secretNumber.classList.add("guessCorrectMain")
        higherlower.classList.add("guessCorrect")
       
        setTimeout(() => {
            gameTag.textContent = "Guess My Number !"
            secretNumber.classList.remove("guessCorrectMain"), 
            secretNumber.textContent = "?", 
            scoreNumber.textContent = 100
            initialScore = 100
            randNum = Math.floor(Math.random()*100), 
            locked = false
        }, 5000)
        
        setTimeout(() => {
            higherlower.classList.remove("guessCorrect"),
            secretNumber.classList.remove("guessCorrect"), 
            lastGuessNum.textContent = "..." 

        }, 500)
        
        return
    }
    else if ( currentGuess < randNum) {
        initialScore -= 5
        scoreNumber.textContent = initialScore
        higherlower.textContent = "Guessed To Low";
        higherlower.classList.add("guessWrong")

        if(initialScore <= 0) {
            gameStatusCheck()
            return
        }


                setTimeout(() => {higherlower.classList.remove("guessWrong"),locked = false}, 500)
        return    
    }
    
    else if (currentGuess > randNum){
        initialScore -= 5
        scoreNumber.textContent = initialScore
        higherlower.textContent = "Guessed To High";
        higherlower.classList.add("guessWrong")
        
        
        if(initialScore <= 0) {
            gameStatusCheck()
            return
        }

       setTimeout(() => {higherlower.classList.remove("guessWrong"),locked = false}, 500)

    return
    }}
