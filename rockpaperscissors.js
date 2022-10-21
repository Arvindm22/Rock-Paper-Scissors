// Function to randomly rock, paper or scissor (Computer's Play) 

function getComputerChoice(){
    let choice = ['rock','paper','scissor'];
    return choice[Math.floor(Math.random()*3)];
}

//Function to play single round of Rock Paper Scissors

function playRound(playerSelection, computerSelection ,playerName_1){
    winner = undefined;
    if((playerSelection === 'rock' && computerSelection === 'scissor') || (playerSelection === 'paper' && computerSelection === 'rock') ||(playerSelection === 'scissor' && computerSelection === 'paper'))
    {
        winner = playerName_1
        return `${playerName_1} Congrats!! You have won the game!!!!!!!!!!!!!! `;
    }
    else if ((computerSelection === 'rock' && playerSelection === 'scissor') || (computerSelection === 'paper' && playerSelection === 'rock') ||(computerSelection === 'scissor' && playerSelection === 'paper'))
    {
        winner = 'computer'
        return `${playerName_1} Sorry!!! You have lost the game!!!!!!!!!!!!!! `;}
    else
    {   
        winner = 'draw'
        return  `${playerName_1} Its a draw !!!!! `;
    }
}

// Function to play the game for a given no of rounds

playerName_1 = prompt("Enter your name:");

playerSelection = prompt("What is your choice:Rock/Paper/Scissor").toLowerCase();
if( playerSelection!=="rock" ||  playerSelection!=="paper" || playerSelection!=="scissor")
{
    alert("Please enter a valid choice!!");
    playerSelection = prompt("What is your choice:Rock/Paper/Scissor").toLowerCase();
}

computerSelection=getComputerChoice();
winner = playRound(playerSelection, computerSelection,playerName_1);
console.log(winner);

