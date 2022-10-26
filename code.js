let playerSelection;
// Function to randomly choose rock, paper or scissor (Computer's Play) 

function getComputerChoice() {
        let choice = ['rock', 'paper', 'scissor'];
        return choice[Math.floor(Math.random() * 3)];
}

let computerSelection ;

//Function to play single round of Rock Paper Scissors

function playRound(playerSelection, computerSelection) {
        let gameWinner = undefined;
        if ((playerSelection === 'rock' && computerSelection === 'scissor') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissor' && computerSelection === 'paper')) {
                gameWinner = info.elements.playerName.value;
                return gameWinner;
        }
        else if ((computerSelection === 'rock' && playerSelection === 'scissor') || (computerSelection === 'paper' && playerSelection === 'rock') || (computerSelection === 'scissor' && playerSelection === 'paper')) {
                gameWinner = 'computer'
                return gameWinner;
        }
        else {
                gameWinner = ' It is a draw.......'
                return gameWinner;
        }
}
let info = document.querySelector('form');
let player = document.querySelector('#player');
let computer = document.querySelector('#computer');
score_1 = 0;
score_2 = 0;

info.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!info.elements.playerName.value) {
                alert("Please Enter a Name!!!")
        }
        else {
                player.innerText = `${info.elements.playerName.value}:${score_1}`
                info.remove();
        }
})

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
let result;

rock.addEventListener('click', () => {
        if (!info.elements.playerName.value) {
                alert("Please Enter a Name!!!")
        }
        else{
        console.log('working');
        playerSelection = 'rock';
        computerSelection = getComputerChoice();
        console.log(computerSelection);
        result = playRound(playerSelection,computerSelection);
        console.log(result);
}})
paper.addEventListener('click', () => {
        if (!info.elements.playerName.value) {
                alert("Please Enter a Name!!!")
        }
        else{
        console.log('working');
        playerSelection = 'paper';
        computerSelection = getComputerChoice();
        console.log(computerSelection);
        result = playRound(playerSelection,computerSelection);
        console.log(result);
       
}})
scissor.addEventListener('click', () => {
        if (!info.elements.playerName.value) {
                alert("Please Enter a Name!!!")
        }
        else{
        console.log('working');
        playerSelection = 'scissor';
         computerSelection = getComputerChoice();
         console.log(computerSelection);
        result = playRound(playerSelection,computerSelection);
        console.log(result)
}})
