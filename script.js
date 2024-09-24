
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

    // create function
        // Ask for user inputs: rock | paper | scissors
        // Store the input in a variable to compare later
