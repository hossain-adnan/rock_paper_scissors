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

    let choice; // variable to store choice
    let isValid = 0; // validator is set to 0 as default

    while ( isValid = 0 ) { // default case is to keep prompting

        choice = prompt("Your turn : rock | paper | scissors"); // Prompt 
    
        let lowChoice = choice.toLowerCase(); // Turn prompt input into lower case

        // If input matches/valid then 
        if (lowChoice === 'rock' || lowChoice === 'paper' || lowChoice === 'scissors') {

            isValid = 1; // change the validator to 1 thus stopping the while loop
            
            return lowChoice; // The input is valid so return it
        }
        
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
        
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice(); 
        playRound (humanSelection, computerSelection);
        console.log(`Score: You ${humanScore} | Computer ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("🏁 You are the Winner!");
    } else if (computerScore > humanScore) {
        console.log("🏁 The computer won");
    } else {
        console.log("🏁 It was a tie");
    }
}

// Let's Play!
playgame();   
playgame();    
