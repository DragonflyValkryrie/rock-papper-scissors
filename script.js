let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
const winLimit = 5;

const container = document.querySelector('#resultContainer');
const divResult = document.createElement("div");
const winResult = document.createElement("div");

const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorButton = document.querySelector(".scissor-button");
const newGameButton = document.querySelector(".new-game-button");

function getComputerChoice() {
    let computerGuess = Math.floor(Math.random() * 3);

    if (computerGuess === 0) {
        return "rock";
    } else if (computerGuess === 1) {
        return "paper";
    } else {
        return "scissor";
    }
}

function playRound(playerSelection, computerSelection) {
    const outcomes = {
        rock: { rock: "tie", paper: "computer wins", scissor: "player wins" },
        paper: { rock: "player wins", paper: "tie", scissor: "computer wins" },
        scissor: { rock: "computer wins", paper: "player wins", scissor: "tie" }
    }
    return outcomes[playerSelection][computerSelection];
}

function isValidThrow(playerSelection) {
    const validThrows = ["rock", "paper", "scissor"];
    return validThrows.includes(playerSelection);
}

function resetScores() {
    playerScore = 0;
    computerScore = 0;
    tieScore = 0;

    enableButtons();

    divResult.textContent = "";
    winResult.textContent = "";
}

function gameScore(result) {
    if (result === "player wins") {
        playerScore += 1;
    } else if (result === 'computer wins') {
        computerScore += 1;
    } else {
        tieScore += 1;
    }

    console.log(`Player score is: ${playerScore} Computer score is: ${computerScore} and you have tied ${tieScore} times`);
    divResult.textContent = `Player score is: ${playerScore} Computer score is: ${computerScore} and you have tied ${tieScore} times`;
    resultContainer.appendChild(divResult);
    winCondition(playerScore, computerScore);
}

function winCondition(playerScore, computerScore) {
    if (playerScore === winLimit || computerScore === winLimit) {
        if (playerScore === winLimit) {
            winResult.textContent = "Player wins the game!";
            console.log("Player wins the game!");
        } else {
            winResult.textContent = "Computer wins the game!";
            console.log("Computer wins the game!");
        }
        resultContainer.appendChild(winResult);
        disableButtons();
        newGame();
    }
}

function newGame() {
    newGameButton.style.display = "block";
    newGameButton.addEventListener("click", () => {
        resetScores();
        newGameButton.style.display = "none";
    });
}

function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorButton.disabled = true;
}

function enableButtons() {
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorButton.disabled = false;
}

let playerSelection = 0;

rockButton.addEventListener("click", () => {
    game("rock");
});

paperButton.addEventListener("click", () => {
    game("paper");
});

scissorButton.addEventListener("click", () => {
    game("scissor");
});

function game(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    console.log(`Player chose ${playerSelection}`);
    console.log(`Computer chose ${computerSelection}`);
    gameScore(result);
    console.log(result);
}
