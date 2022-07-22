function getComputerChoice() {
    const arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(Math.random() * arr.length)];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    }

    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
            playerScore++;
            if (playerSelection === "rock" && computerSelection === "scissors") {
                playerSelection = "✊";
                computerSelection = "✌️";
            } else if (playerSelection === "paper" && computerSelection === "rock") {
                playerSelection = "✋";
                computerSelection = "✊";
            } else if (playerSelection === "scissors" && computerSelection === "paper") {
                playerSelection = "✌️";
                computerSelection = "✋";
            }
            return `You won! ${playerSelection} beats ${computerSelection}`;
        }

        if ((computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper")) {
            computerScore++;
            if (computerSelection === "rock" && playerSelection === "scissors") {
                playerSelection = "✌️";
                computerSelection = "✊";
            } else if (computerSelection === "paper" && playerSelection === "rock") {
                playerSelection = "✊";
                computerSelection = "✋";
            } else if (computerSelection === "scissors" && playerSelection === "paper") {
                playerSelection = "✋";
                computerSelection = "✌️";
            }
            return `You lost! ${computerSelection} beats ${playerSelection}`;
        }
        
    }
    

function game() {
    return playRound(playerSelection, getComputerChoice());
}

function displayScore() {
    displayPlayerScore.textContent = playerScore;
    displayComputerScore.textContent = computerScore;
}

function gameOver() {
    if (playerScore == 5) {
        return "Congrats! You won.";
    } else if (computerScore == 5) {
        return "Nice try! Get over here...";
    }
    
}
    
const btn1 = document.getElementById("rock");
const btn2 = document.getElementById("paper");
const btn3 = document.getElementById("scissors");
const display = document.getElementById("result");

const displayPlayerScore = document.getElementById("playerScore");
displayPlayerScore.textContent = playerScore;
const displayComputerScore = document.getElementById("computerScore");
displayComputerScore.textContent = computerScore;

let playerSelection;
    
btn1.addEventListener("click", ()=>{
    playerSelection = "rock";
    display.textContent = game();
    displayScore();
})

btn2.addEventListener("click", ()=>{
    playerSelection = "paper";
    display.textContent = game();
    displayScore();
})

btn3.addEventListener("click", ()=>{
    playerSelection = "scissors";
    display.textContent = game();
    displayScore();
})

gameOver();