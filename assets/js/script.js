const playerscore = document.getElementById("player-score");

const playerhand = document.getElementById("player-hand");

const computerscore = document.getElementById("computer-score");
const computerhand = document.getElementById("computer-hand");

const playerrock = document.getElementById("player-rock");
const playerpaper = document.getElementById("player-paper");
const playerscissor = document.getElementById("player-scissor");

const computerrock = document.getElementById("computer-rock");
const computerpaper = document.getElementById("computer-paper");
const computerscissor = document.getElementById("computer-scissor");

const gameresult = document.getElementById("game-result");

const gameimages = document.querySelectorAll("img");
let computerselect = "";
let playerscoreNumber = 0;
let computerscoreNumber = 0;

const selections = {
    rock: {
        name: "rock",
        defeat: "scissor"
    },
    paper: {
        name: "paper",
        defeat: "rock"
    },
    scissor: {
        name: "scissor",
        defeat: "paper"
    }
};

//computer hand radomisation function

function computerRandomselect() {
    const computerSelectNumber = Math.random();
    if (computerSelectNumber <= 0.35) {
        computerselect = "rock";
    } else if (computerselect <= 0.7) {
        computerselect = "paper";
    } else {
        computerselect = "scissor"
    }
    displaycomputerselect(computerselect)

}

// computer selection styling and function

function displaycomputerselect(computerselect) {
    switch (computerselect) {
        case "rock":
            computerrock.classList.add("selected");
            computerhand.textContent = "Computer choose Rock";
            break;
        case 'paper':
            computerpaper.classList.add("selected");
            computerhand.textContent = "Computer choose Paper";
            break;
        case 'scissor':
            computerscissor.classList.add('selected');
            computerhand.textContent = 'Computer choose Scissor';
            break;

        default:
            break;
    }

}

// reset the selected items function

function resetselected() {
    gameimages.forEach((img) => {
        img.classList.remove("selected")
    })
}
// player area and selection functions

function select(playerselect) {
    resetselected()

    switch (playerselect) {
        case 'rock':
            playerrock.classList.add("selected");
            playerhand.textContent = 'You choose Rock';
            break;
        case 'paper':
            playerpaper.classList.add("selected");
            playerhand.textContent = 'You choose Paper ';
            break;
        case 'scissor':
            playerscissor.classList.add('selected');
            playerhand.textContent = 'You choose Scissor';
            break;

        default:
            break;
    }
    computerRandomselect();
    updatescore(playerselect, computerselect);

}
// Score Function

function updatescore(playerselect) {
    const select = selections[playerselect]
    if (playerselect === computerselect) {
        gameresult.textContent = "It's a Tie !";
    } else if (select.defeat.indexOf(computerselect) > -1) {
        gameresult.textContent = "You Won !";
        playerscoreNumber++;
        playerscore.textContent = playerscoreNumber;

    } else {
        gameresult.textContent = "You Lost !";
        computerscoreNumber++;
        computerscore.textContent = computerscoreNumber;
    }
}