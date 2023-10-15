const playerInput = document.getElementById('playerInput');
const button = document.querySelector('#button');
const outPut = document.querySelector('#messege');

function getComputerChoice(){
    const compSelect = ["камень", "ножницы", "бумага"];
    let randomNumber = Math.floor(Math.random() * 3);
    return compSelect[randomNumber];
}

// let computerSelection = getComputerChoice();
// let playerSelection = playerInput.value.toLowerCase();

function playRound(playerSelection, computerSelection){
    
    if(computerSelection == playerSelection) {
        return outPut.textContent = "Ничья";
    } else if(computerSelection == "камень" && playerSelection == "ножницы"){
        return outPut.textContent = "Копьютер победил!";
    } else if(playerSelection == "камень" && computerSelection == "ножницы"){
        return outPut.textContent = "Человек победил!";
    } else if(computerSelection == "ножницы" && playerSelection == "бумага"){
        return outPut.textContent = "Копьютер победил!";
    } else if(playerSelection == "ножницы" && computerSelection == "бумага"){
        return outPut.textContent = "Человек победил";
    } else if(computerSelection == "бумага" && playerSelection == "камень"){
        return outPut.textContent = "Копьютер победил!";
    } else if(playerSelection == "бумага" && computerSelection == "камень"){
        return outPut.textContent = "Человек победил!";
    } else if(computerSelection == "ножницы" && playerSelection == "камень"){
        return outPut.textContent = "Человек победил!";
    } else if(computerSelection == "камень" && playerSelection == "бумага"){
        return outPut.textContent = "Человек победил!";
    } else {
        return outPut.textContent = "Нет совпадений!";
    }
}

button.addEventListener('click', function(){
    let computerSelection = getComputerChoice();
    let playerSelection = playerInput.value.toLowerCase();
    
    console.log(playerSelection);
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
    playerInput.value = '';
    
}
)

console.log(playerInput.value);



// console.log(getComputerChoice());