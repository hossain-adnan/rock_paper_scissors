console.log('Hello Wprld');

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

console.log(getComputerChoice);


