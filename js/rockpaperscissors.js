
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
        console.log(`It's a tie. ${playerSelection} equals ${computerSelection}`);
        return "Tie";
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        console.log("You win! ROCK beats SCISSORS");
        return "Player";
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        console.log("You lose! PAPER beats ROCK");
        return "Computer";
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        console.log("You lose! SCISSORS beats PAPER");
        return "Computer";
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        console.log("You Win! PAPER beats ROCK");
        return "Player";
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        console.log("You lose! ROCK beats SCISSORS");
        return "Computer"
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        console.log("You Win! SCISSORS beats PAPER");
        return "Player";
    }
}

// This function plays the game
function game() {
    let playerWins = 0;
    let computerWins = 0;
    while (playerWins !== 5 || computerWins !== 5) {
        let playerChoice = prompt("Choose Rock Paper Scissors");
        let computerChoice = getComputerChoice();
        let roundWinner = playRound(playerChoice, computerChoice);
        if (roundWinner === "Player") {
            playerWins += 1;
            console.log(`Player: ${playerWins} Computer: ${computerWins}`);    
        } else if (roundWinner === "Computer") {
            computerWins += 1;
            console.log(`Player: ${playerWins} Computer: ${computerWins}`);
        } else if (roundWinner === "Tie") {
            console.log(`Player: ${playerWins} Computer: ${computerWins}`);
        }
        if (playerWins === 5) {
            console.log("Player Wins");
            break;
        }
        if (computerWins === 5) {
            console.log("Computer Wins");
            break;
        }
    }
}

game();
