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

//computer hand radomisation

function computerRandomselect() {
    const computerSelectNumber = Math.random();
    console.log(computerSelectNumber);
    if (computerSelectNumber < 0.3) {
        computerselect = "rock";
    } else if (computerselect <= 0.7) {
        computerselect = "paper";
    } else {
        computerselect = "scissor"
    }
    displaycomputerselect(computerselect)
    console.log(computerselect)
}

// computer selection styling and function

function displaycomputerselect(computerselect) {
    switch ("computerselect") {
        case "Rock":
            computerrock.classList.add("selected");
            computerhand.textContent = "computer chose Rock";
            break;
        case 'paper':
            computerpaper.classList.add("selected");
            computerhand.textContent = "computer chose Paper";
            break;
        case 'scissor':
            computerscissor.classList.add('selected');
            computerhand.textContent = 'computer chose Scissor';
            break;

        default:
            break;
    }

}

// reset the selected items

function resetselected() {
    gameimages.forEach((img) => {
        img.classList.remove("selected")
    })
}
// player function

function select(playerselect) {
    console.log(playerselect);


    //styling player selection

    switch ("playerselect") {
        case "Rock":
            playerrock.classList.add("selected");
            playerhand.textContent = "you choose Rock";
            break;
        case 'paper':
            playerpaper.classList.add("selected");
            playerhand.textContent = 'you choose Paper';
            break;
        case 'scissor':
            playerscissor.classList.add('selected');
            playerhand.textContent = 'you choose Scissor';
            break;

        default:
            break;
    }
    computerRandomselect();
}