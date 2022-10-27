let playerSelection;
let computerSelection;
// Function to randomly choose rock, paper or scissor (Computer's Play) 

function getComputerChoice() {
        let choice = ['rock', 'paper', 'scissor'];
        return choice[Math.floor(Math.random() * 3)];
}


//Function to play single round of Rock Paper Scissors

function playRound(playerSelection, computerSelection) {
        let gameWinner = undefined;

        if ((playerSelection === 'rock' && computerSelection === 'scissor') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissor' && computerSelection === 'paper')) {
                gameWinner = playerName;
                score_1 += 1;
                return gameWinner;
        }
        else if ((computerSelection === 'rock' && playerSelection === 'scissor') || (computerSelection === 'paper' && playerSelection === 'rock') || (computerSelection === 'scissor' && playerSelection === 'paper')) {
                gameWinner = 'computer'
                score_2 += 1;
                return gameWinner;
        }
        else {
                gameWinner = 'Draw'
                return gameWinner;
        }
        
}

let info = document.querySelector('form');
let player = document.querySelector('#player');
let computer = document.querySelector('#computer');
score_1 = 0;
score_2 = 0;
let playerName;
info.addEventListener('submit', function (e) {
        e.preventDefault();
        playerName = info.elements.playerName.value;
        if (!playerName) {
                alert("Please Enter a Name!!!")
        }
        else {
                player.innerText = `${playerName}:${score_1}`
                info.remove();
        }
})

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const display = document.querySelector('#result div');
const b = document.querySelector('#buttons');
let result;
let winningScore = 5;

rock.addEventListener('click', () => {
        if (!playerName) {
                alert("Please Enter a Name!!!")
        }
        else {
                console.log('working');
                playerSelection = 'rock';
                computerSelection = getComputerChoice();
                console.log(computerSelection);
                result = playRound(playerSelection, computerSelection);
                console.log(result);
                if (result === playerName) {
                        player.innerText = `${playerName}:${score_1}`
                        display.innerText = `${playerName} wins`;
                }
                else if (result === 'computer') {
                        computer.innerText = `Computer:${score_2}`;
                        display.innerText = `computer wins`;
                }
                else {
                        display.innerText = result;
                }
        }
})

paper.addEventListener('click', () => {
        if (!playerName) {
                alert("Please Enter a Name!!!")
        }
        else {
                console.log('working');
                playerSelection = 'paper';
                computerSelection = getComputerChoice();
                console.log(computerSelection);
                result = playRound(playerSelection, computerSelection);
                console.log(result);
                if (result === playerName) {

                        player.innerText = `${playerName}:${score_1}`;
                        display.innerText = `${playerName} wins`;
                }
                else if (result === 'computer') {

                        computer.innerText = `Computer:${score_2}`;
                        display.innerText = `computer wins`;
                }
                else {
                        display.innerText = result;
                }

        }
})

scissor.addEventListener('click', () => {
        if (!playerName) {
                alert("Please Enter a Name!!!")
        }
        else {
                console.log('working');
                playerSelection = 'scissor';
                computerSelection = getComputerChoice();
                console.log(computerSelection);
                result = playRound(playerSelection, computerSelection);
                console.log(result);
                if (result === playerName) {

                        player.innerText = `${playerName}:${score_1}`;
                        display.innerText = `${playerName} wins`;
                }
                else if (result === 'computer') {

                        computer.innerText = `Computer:${score_2}`;
                }
                else {
                        display.innerText = result;
                }
        }
})
