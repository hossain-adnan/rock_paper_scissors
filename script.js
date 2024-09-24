
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
    // getHumanChoice();

    
    

        
