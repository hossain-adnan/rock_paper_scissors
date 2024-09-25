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
        return lowChoice;
        // console.log(lowChoice);
    }
}

// Write the logic to play a single round
function playRound(humanChoice, computerChoice) {

    console.log(`You: ${humanChoice} | Computer: ${computerChoice}`);

    if (humanChoice === 'rock') {
        if (computerChoice == 'scissors') {
            humanScore += 1;
            console.log(`You win! Because ${humanChoice} beats ${computerChoice}`);
        } else if (computerChoice == 'paper') {
            computerScore += 1;
            console.log(`You lose! Because ${computerChoice} beats ${humanChoice}`);
        } else {
            console.log("It's a tie");
        }
    }

    else if (humanChoice === 'paper') {
        if (computerChoice == 'rock') {
            humanScore += 1;
            console.log(`You win! Because ${humanChoice} beats ${computerChoice}`);
        } else if (computerChoice == 'scissors') {
            computerScore += 1;
            console.log(`You lose! Because ${computerChoice} beats ${humanChoice}`);
        }  else {
            console.log("It's a tie");
        }
    }

    else if (humanChoice === 'scissors') {
        if (computerChoice == 'paper') {
            humanScore += 1;
            console.log(`You win! Because ${humanChoice} beats ${computerChoice}`);
        }  else if (computerChoice == 'rock') {
            computerScore += 1;
            console.log(`You lose! Because ${computerChoice} beats ${humanChoice}`);
        }  else {
            console.log("It's a tie");
        }
    }
}

// Write the logic to play the entire game
function playgame() {

    const round = 5;

    for (let index = 0; index < round; index++) {
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(); 
        playRound (humanSelection, computerSelection);
        console.log(`Score: You ${humanScore} | Computer ${computerScore}`);
    }
    
    if (humanScore > computerScore) {
        console.log("You are the Winner!");
    } else {
        console.log("The computer won");
    }
}

        
