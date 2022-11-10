//This function returns an integer number between 1 and 3
function getRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    return randomNumber;
}

//This function returns the computer choice
function getComputerChoice() {
    let computerChoice = getRandomNumber();
    if (computerChoice === 1) {
        return "ROCK";
    } else if (computerChoice === 2) {
        return "PAPER";
    } else if (computerChoice === 3){
        return "SCISSORS";
    }
}

//This function plays a round of the game and return the result
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if (playerSelection === computerSelection){
        return `It's a tie. ${playerSelection} equals ${computerSelection}`;
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return "You win! ROCK beats SCISSORS";
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        return "You lose! PAPER beats ROCK";
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        return "You lose! SCISSORS beats PAPER";
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return "You Win! PAPER beats ROCK";
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        return "You lose! ROCK beats SCISSORS";
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return "You Win! SCISSORS beats PAPER";
    }
}

let playerSelection = "paPER";
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));