function getComputerChoice(){
    let computerGuess = Math.floor(Math.random() * 3);

    if (computerGuess == 0){
        return "rock";
    } else if (computerGuess == 1) {
        return "paper";
    } else {
        return "scissor";
    }
}

function playRound(playerSelection, computerSelection){

    const outcomes = {
        rock: {rock: "tie", paper: "computer wins", scissor: "player wins"},
        paper: {rock: "player wins", paper: "tie", scissor: "computer wins"},
        scissor: {rock: "computer wins", paper: "player wins", scissor: "tie"}
    }
    return outcomes[playerSelection][computerSelection];
}

function isValidThrow(playerSelection) {
    const validThrows = ["rock", "paper", "scissor"];
    return validThrows.includes(playerSelection);
}

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function gameScore(result){

    if (result === "player wins"){
        playerScore += 1
    } else if (result === 'computer wins'){
        computerScore +=1;
    } else
        tieScore += 1;

    console.log(`Player score is: ${playerScore} Computer score is: ${computerScore} and you have tied ${tieScore} times`);
}
function game(){
    let playerSelection = prompt("What do you throw?").toLowerCase();

    while (!isValidThrow(playerSelection)) {
        alert("Valid throws only. Please try again.");
        playerSelection = prompt("What do you throw?").toLowerCase();
    }

    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    console.log(`Player chose ${playerSelection}`);
    console.log(`Computer chose ${computerSelection}`);

    gameScore(result);

    console.log(result);
}

for (let i = 0; i < 4; i++){
    game();
}
