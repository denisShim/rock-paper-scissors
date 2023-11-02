const outPut = document.querySelector('#messege');
const playerTurn = document.querySelector('.playerChoice');
const computerTurn = document.querySelector('.computerChoice');
const playerScore = document.querySelector('.player_score');
const computerScore = document.querySelector('.computer_score');

let buttons = document.querySelectorAll('button');

let playerCount = 0;
let computerCount = 0;

function getComputerChoice(){
    const compSelect = ["rock", "scissors", "paper"];
    let randomNumber = Math.floor(Math.random() * 3);
    return compSelect[randomNumber];
}


function playRound(playerSelection, computerSelection){
    
    if(computerSelection == playerSelection) {
        return outPut.textContent = "draw";
    } else if(computerSelection == "rock" && playerSelection == "scissors"){
        computerCount++;
        return outPut.textContent = "Computer win!";
    } else if(playerSelection == "rock" && computerSelection == "ножницы"){
        playerCount++;
        return outPut.textContent = "You win!";
    } else if(computerSelection == "scissors" && playerSelection == "paper"){
        computerCount++;
        return outPut.textContent = "Computer win!";
    } else if(playerSelection == "scissors" && computerSelection == "paper"){
        playerCount++;
        return outPut.textContent = "You win!";
    } else if(computerSelection == "paper" && playerSelection == "rock"){
        computerCount++;
        return outPut.textContent = "Computer win!";
    } else if(playerSelection == "paper" && computerSelection == "rock"){
        playerCount++;
        return outPut.textContent = "You win!";
    } else if(computerSelection == "scissors" && playerSelection == "rock"){
        playerCount++;
        return outPut.textContent = "You win!";
    } else if(computerSelection == "rock" && playerSelection == "paper"){
        playerCount++;
        return outPut.textContent = "You win!";
    } else {
        return outPut.textContent = "No matches";
    }
}

function game(playerSelection){
    let computerSelection = getComputerChoice();
    
    playerTurn.textContent = "Your turn - " + playerSelection;
    computerTurn.textContent = "Computer turn - " + computerSelection;
    
    playRound(playerSelection, computerSelection);
    playerScore.textContent = `Player count is: ${playerCount}`;
    computerScore.textContent = `Computer count is: ${computerCount}`;

    if(playerCount === 5){
        outPut.textContent = "You WIN this game with score " + playerCount + " - " + computerCount;
        playerCount = 0;
        computerCount = 0;
    } else if(computerCount === 5){
        outPut.textContent = "Computer WIN this game with score " + computerCount + " - " + playerCount;
        playerCount = 0;
        computerCount = 0;
    }
}

buttons.forEach(button => {
    button.addEventListener('click', function(){
        game(button.value);
    });
})
