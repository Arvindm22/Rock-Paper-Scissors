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

//Function to Display the result after every round

function res(r){
        if (r === playerName) {
                player.innerText = `${playerName}:${score_1}`
                display.innerText = `${playerName} wins`;
        }
        else if (r === 'computer') {
                computer.innerText = `Computer:${score_2}`;
                display.innerText = `computer wins`;
        }
        else {
                display.innerText = result;
        }
}

//Function to stop the game when either player scores 5 points and display the winner of the game.

function win(s1,s2){
        if (s1 === winningScore ){
                rock.disabled = true;
                paper.disabled = true;
                scissor.disabled = true;
                display.innerText = `Game Over ${playerName}Congrats!!!You have won the game...`
                }
        if(s2 === winningScore){ 
                rock.disabled = true;
                paper.disabled = true;
                scissor.disabled = true;
                display.innerText = `Game Over...Sorry ${playerName}....
                                     You have lost the game...
                                     Computer Wins..`
               
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
                res(result);
                win(score_1, score_2);
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
                res(result);
                win(score_1, score_2);
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
                res(result);
                win(score_1, score_2);                
        }
})


