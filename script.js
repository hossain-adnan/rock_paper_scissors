
// Click button to Play
const rockBtn = document.querySelector("#rock")
rockBtn.addEventListener("click", () => {
    playRound('rock', getComputerChoice());
    checkScore(); 
});

const paperBtn = document.querySelector("#paper")
paperBtn.addEventListener("click", () => {
    playRound('paper', getComputerChoice());
    checkScore();
});

const scissorsBtn = document.querySelector("#scissors")
scissorsBtn.addEventListener("click", () => {
    playRound('scissors', getComputerChoice());
    checkScore();
});


// Scoreboard
let humanScore = 0;
let computerScore = 0;

const scoreboard = document.querySelector('.scoreboard');
scoreboard.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

function checkScore() {
    let winner = document.createElement('span')
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            winner.textContent = 'You Win! ';
            scoreboard.prepend(winner);
        } else {
            winner.textContent = 'The Machine Wins! ';
            scoreboard.prepend(winner);
        }
        humanScore = 0;
        computerScore = 0;
    } 
}


// Computer choice
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

const divList = document.querySelector('ul'); // Div to show text
const choiceList = document.createElement('li'); // Show choice choosen
const roundResult = document.createElement('li');

// Write the logic to play a single round

function playRound(humanChoice, computerChoice) {

    choiceList.textContent = `You: ${humanChoice} | Computer: ${computerChoice}`;
    divList.appendChild(choiceList);

    if (humanChoice === 'rock') {
        if (computerChoice == 'scissors') {
            humanScore += 1;
            roundResult.textContent = `You win! Because ${humanChoice} beats ${computerChoice}`;
            divList.appendChild(roundResult);
            scoreboard.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

        } else if (computerChoice == 'paper') {
            computerScore += 1;
            roundResult.textContent = `You lose! Because ${computerChoice} beats ${humanChoice}`;
            divList.appendChild(roundResult);
            scoreboard.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

        } else {
            roundResult.textContent = "It's a tie";
            divList.appendChild(roundResult);
            scoreboard.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
        }
    }

    else if (humanChoice === 'paper') {
        if (computerChoice == 'rock') {
            humanScore += 1;
            roundResult.textContent =`You win! Because ${humanChoice} beats ${computerChoice}`;
            divList.appendChild(roundResult);
            scoreboard.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

        } else if (computerChoice == 'scissors') {
            computerScore += 1;
            roundResult.textContent =`You lose! Because ${computerChoice} beats ${humanChoice}`;
            divList.appendChild(roundResult);
            scoreboard.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

        }  else {
            roundResult.textContent ="It's a tie";
            divList.appendChild(roundResult);
            scoreboard.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
        }
    }

    else if (humanChoice === 'scissors') {
        if (computerChoice == 'paper') {
            humanScore += 1;
            roundResult.textContent =`You win! Because ${humanChoice} beats ${computerChoice}`;
            divList.appendChild(roundResult);
            scoreboard.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

        }  else if (computerChoice == 'rock') {
            computerScore += 1;
            roundResult.textContent =`You lose! Because ${computerChoice} beats ${humanChoice}`;
            divList.appendChild(roundResult);
            scoreboard.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

        }  else {
            roundResult.textContent ="It's a tie";
            divList.appendChild(roundResult);
            scoreboard.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
        }
    }
}
 
