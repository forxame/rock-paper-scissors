function getComputerChoice() {
    const arr = ["✊", "✋", "✌️"];
    return arr[Math.floor(Math.random() * arr.length)];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    }

    if ((playerSelection === "✊" && computerSelection === "✌️") ||
        (playerSelection === "✋" && computerSelection === "✊") ||
        (playerSelection === "✌️" && computerSelection === "✋")) {
            playerScore++;
            return `You won!`;
        }

        if ((computerSelection === "✊" && playerSelection === "✌️") ||
        (computerSelection === "✋" && playerSelection === "✊") ||
        (computerSelection === "✌️" && playerSelection === "✋")) {
            computerScore++;
            return `You lost!`;
        }
        
    }
    
let computerSelection;
function game() {
    computerSelection = getComputerChoice();
    return playRound(playerSelection, computerSelection);
}

function displayScore() {
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
    playerChoice.textContent = playerSelection;
    computerChoice.textContent = computerSelection;
}

function gameOver() {
    if (playerScore == 5) {
        winnerText.textContent =  "Congrats! You won.";
    } else if (computerScore == 5) {
        winnerText.textContent = "Better luck next time!";
    }
}
    
const btn1 = document.getElementById("rock");
const btn2 = document.getElementById("paper");
const btn3 = document.getElementById("scissors");
const winnerText = document.getElementById("result");
const playerScoreText = document.getElementById("playerScore");
const computerScoreText = document.getElementById("computerScore");
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");


playerScoreText.textContent = playerScore;
computerScoreText.textContent = computerScore;
let playerSelection;

btn1.addEventListener("click", ()=>{
    playerSelection = "✊";
    winnerText.textContent = game();
    displayScore();
    gameOver();
})

btn2.addEventListener("click", ()=>{
    playerSelection = "✋";
    winnerText.textContent = game();
    displayScore();
    gameOver();
})

btn3.addEventListener("click", ()=>{
    playerSelection = "✌️";
    winnerText.textContent = game();
    displayScore();
    gameOver();
})