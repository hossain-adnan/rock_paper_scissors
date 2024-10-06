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

const rockBtn = document.querySelector("#rock")
rockBtn.addEventListener("click", () => {
    playRound('rock', getComputerChoice()) 
});


const paperBtn = document.querySelector("#paper")
paperBtn.addEventListener("click", () => {
    playRound('paper', getComputerChoice())
});

const scissorsBtn = document.querySelector("#scissors")
scissorsBtn.addEventListener("click", () => {
    playRound('scissors', getComputerChoice())
});

const divList = document.querySelector('ul'); // Div to show text
const choiceList = document.createElement('li'); // Show choice choosen
const roundResult = document.createElement('li');

// Write the logic to play a single round

function playRound(humanChoice, computerChoice) {

    choiceList.textContent = `You: ${humanChoice} | Computer: ${computerChoice}`;
    divList.appendChild(choiceList);
    // divList.removeChild(roundResult);  Doesn't work   

    if (humanChoice === 'rock') {
        if (computerChoice == 'scissors') {
            humanScore += 1;
            roundResult.textContent = `You win! Because ${humanChoice} beats ${computerChoice}`;
            divList.appendChild(roundResult);

        } else if (computerChoice == 'paper') {
            computerScore += 1;
            roundResult.textContent = `You lose! Because ${computerChoice} beats ${humanChoice}`;
            divList.appendChild(roundResult);

        } else {
            roundResult.textContent = "It's a tie";
            divList.appendChild(roundResult);
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

    // const round = 5;

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
