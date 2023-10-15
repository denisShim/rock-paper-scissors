const playerInput = document.getElementById('playerInput');
const button = document.querySelector('#button');
const outPut = document.querySelector('#messege');
const playerTurn = document.querySelector('.playerChoice');
const computerTurn = document.querySelector('.computerChoice');

let playerCount = 0;
let computerCount = 0;

function getComputerChoice(){
    const compSelect = ["камень", "ножницы", "бумага"];
    let randomNumber = Math.floor(Math.random() * 3);
    return compSelect[randomNumber];
}


function playRound(playerSelection, computerSelection){
    
    if(computerSelection == playerSelection) {
        return outPut.textContent = "Ничья";
    } else if(computerSelection == "камень" && playerSelection == "ножницы"){
        computerCount++;
        return outPut.textContent = "Копьютер победил!";
    } else if(playerSelection == "камень" && computerSelection == "ножницы"){
        playerCount++;
        return outPut.textContent = "Человек победил!";
    } else if(computerSelection == "ножницы" && playerSelection == "бумага"){
        computerCount++;
        return outPut.textContent = "Копьютер победил!";
    } else if(playerSelection == "ножницы" && computerSelection == "бумага"){
        playerCount++;
        return outPut.textContent = "Человек победил";
    } else if(computerSelection == "бумага" && playerSelection == "камень"){
        computerCount++;
        return outPut.textContent = "Копьютер победил!";
    } else if(playerSelection == "бумага" && computerSelection == "камень"){
        playerCount++;
        return outPut.textContent = "Человек победил!";
    } else if(computerSelection == "ножницы" && playerSelection == "камень"){
        playerCount++;
        return outPut.textContent = "Человек победил!";
    } else if(computerSelection == "камень" && playerSelection == "бумага"){
        playerCount++;
        return outPut.textContent = "Человек победил!";
    } else {
        return outPut.textContent = "Нет совпадений!";
    }
}

function game(){
    let computerSelection = getComputerChoice();
    let playerSelection = playerInput.value.toLowerCase();
    
    playerTurn.textContent = "Твой ход - " + playerSelection;
    computerTurn.textContent = "Компьтера ход - " + computerSelection;
    
    playRound(playerSelection, computerSelection);
    playerInput.value = '';

    console.log(computerCount + " - comp");
    console.log(playerCount + " - you")

    if(playerCount === 5){
        outPut.textContent = "ТВОЯ ПОБЕДА В ЭТОЙ ИГРЕ СО СЧЕТОМ " + playerCount + " - " + computerCount;
        playerCount = 0;
        computerCount = 0;
    } else if(computerCount === 5){
        outPut.textContent = "КОМПЬЮТЕРА ПОБЕДА В ЭТОЙ ИГРЕ СО СЧЕТОМ " + computerCount + " - " + playerCount;
        playerCount = 0;
        computerCount = 0;
    }
}

button.addEventListener('click', game);
