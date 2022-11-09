//This function returns an integer number between 1 and 3
function getRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    return randomNumber;
}

//This function returns the computer choice
function getComputerChoice() {
    let computerChoice = getRandomNumber();
    if (computerChoice === 1) {
        return "Rock";
    } else if (computerChoice === 2) {
        return "Paper";
    } else if (computerChoice === 3){
        return "Scissors";
    }
}

