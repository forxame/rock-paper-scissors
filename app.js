function getComputerChoice() {
    const arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(Math.random() * arr.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    }

    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
            return `You won! ${playerSelection} beats ${computerSelection}`;
        }

        if ((computerSelection === "rock" && playerSelection === "scissors") ||
            (computerSelection === "paper" && playerSelection === "rock") ||
            (computerSelection === "scissors" && playerSelection === "paper")) {
            return `You lost! ${computerSelection} beats ${playerSelection}`;
        }

}

const playerSelection = prompt("Your choice[rock:paper:scissors]: ");
const computerSelection = getComputerChoice();
function game() {
        let res = playRound(playerSelection, computerSelection);
        console.log(res);
}
game()