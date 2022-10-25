// Function to randomly rock, paper or scissor (Computer's Play) 

function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissor'];
    return choice[Math.floor(Math.random() * 3)];
}

//Function to play single round of Rock Paper Scissors

function playRound(playerSelection, computerSelection, playerName_1) {
    let gameWinner = undefined;
    if ((playerSelection === 'rock' && computerSelection === 'scissor') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissor' && computerSelection === 'paper')) {
        gameWinner = playerName_1;
        return gameWinner;
    }
    else if ((computerSelection === 'rock' && playerSelection === 'scissor') || (computerSelection === 'paper' && playerSelection === 'rock') || (computerSelection === 'scissor' && playerSelection === 'paper')) {
        gameWinner = 'computer'
        return gameWinner;
    }
    else {
        gameWinner = `${playerName_1} It is a draw.......`
        return gameWinner;
    }
}

// Function to play the game for a given no of rounds.

function game() {
    score_1 = 0;
    score_2 = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("What is your choice:Rock/Paper/Scissor").toLowerCase();
        if ((playerSelection.toLowerCase() !== "rock") && (playerSelection.toLowerCase() !== "paper") && (playerSelection.toLowerCase() !== "scissor")) {
            alert("Please enter a valid choice!!");
            playerSelection = prompt("What is your choice:Rock/Paper/Scissor").toLowerCase();
          }
        result = playRound(playerSelection, computerSelection, playerName_1);
        console.log(result);
        if (result === playerName_1) {
            score_1++;
        }
        else if (result === "computer")
        {
            score_2++;
        }
        else{
            score_1+=0;
            score_2+=0;
        }
        
    }
    console.log(score_1,score_2);
    if (score_1 > score_2) {
        return `Congrats ${playerName_1} You have won the game.....!!!`
    }
    else if (score_2 > score_1) {
        return `Sorry ${playerName_1} You have lost the game.....!!! Better Luck next time....`
    }
    else {
        return "The game is a draw....."
    }
}
try {
    playerName_1 = prompt("Enter your name:");
    playerSelection = prompt("What is your choice:Rock/Paper/Scissor");

    if ((playerSelection.toLowerCase() !== "rock") && (playerSelection.toLowerCase() !== "paper") && (playerSelection.toLowerCase() !== "scissor")) {
      alert("Please enter a valid choice!!");
      playerSelection = prompt("What is your choice:Rock/Paper/Scissor").toLowerCase();
    }
    
    computerSelection = getComputerChoice();
    
    console.log(`The Winner of the game is ${playRound(playerSelection,computerSelection,playerName_1)}...!!!`)
    inp = prompt("Do you want play a 5 round game:Y/N").toUpperCase();
    if (inp === 'Y'){
        winner = game();
        console.log(winner);    
    }
    console.log(`Thanks for playing ${playerName_1.toUpperCase()} see you next time `);
} 
    catch (error) {
    console.log("We are sorry to see you leave us!hope you consider playing again..")
}
