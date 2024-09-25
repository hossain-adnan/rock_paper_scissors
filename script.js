// Declare global variable to store score
let humanScore = 0;
let computerScore = 0;

// Logic to get the computer choice
function getComputerChoice() {

    let getNum = Math.floor(Math.random() * 3);

    if (getNum === 0) {
        return "rock";
    } else if (getNum === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Logic to get the human choice
function getHumanChoice() {

    let choice; 
    let isValid = false;

    while (!isValid) {
        choice = prompt("Your turn : rock | paper | scissors");
    
        let lowChoice = choice.toLowerCase();

        if (lowChoice == 'rock' || lowChoice == 'paper' || lowChoice == 'scissors') {
            isValid = true;
        }
        // console.log(lowChoice);
    }

    return lowChoice;
}

// Write the logic to play a single round

function playRound(humanChoice, computerChoice) {

    while (humanChoice === 'rock') {
        if (computerChoice == 'scissors') {
            humanScore += 1;
            console.log(`You win! Because ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore += 1;
            console.log(`You lose! Because ${computerChoice} beats ${humanChoice}`);
        }
    }

    while (humanChoice === 'paper') {
        if (computerChoice == 'rock') {
            humanScore += 1;
            console.log(`You win! Because ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore += 1;
            console.log(`You lose! Because ${computerChoice} beats ${humanChoice}`);
        }
    }

    while (humanChoice === 'scissors') {
        if (computerChoice == 'paper') {
            humanScore += 1;
            console.log(`You win! Because ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore += 1;
            console.log(`You lose! Because ${computerChoice} beats ${humanChoice}`);
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(); 

playRound (humanSelection, computerSelection);
        
