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
}

// Write the logic to play a single round

// Function that takes the human and computer player choices as arguments
function playRound(humanChoice, computerChoice) {
    
    // Compare both choices:
    // Rules: rock & scissors => rock | scissors & paper => scissors | paper > rock => paper

    // Human = rock, Computer = scissors => humanScore += 1;

    // IF humanChoice = rock && computerChoice = paper THEN
        // computerScore += 1
        // Show message:
            // `You lose! ${computerChoice} beats ${humanChoice}`
    // IF humanChoice = rock && computerChoice = scissors THEN
        // humanScore += 1
        // Show message:
            // `You win! ${humanChoice} beats ${computerChoice}`

    // LIKEWISE for paper & scissors
}

        
