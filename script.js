const playerInput = document.getElementById('playerInput');
const button = document.querySelector('#button');
const outPut = document.querySelector('#messege');
const playerTurn = document.querySelector('.playerChoice');
const computerTurn = document.querySelector('.computerChoice');

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

function game(){
    let computerSelection = getComputerChoice();
    let playerSelection = playerInput.value.toLowerCase();
    
    playerTurn.textContent = "Your turn - " + playerSelection;
    computerTurn.textContent = "Computer turn - " + computerSelection;
    
    playRound(playerSelection, computerSelection);
    playerInput.value = '';

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

button.addEventListener('click', game);
