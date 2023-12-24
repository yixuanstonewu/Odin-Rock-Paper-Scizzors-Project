function getComputerChoice() {
    const num = Math.random()
    if (num < 0.33) {
        return "rock"
    } else if (num >= 0.33 && num < 0.66) {
        return "paper"
    } else {
        return "scizzors"
    }
}

function playRound(playerSelection, computerSelection) {
    const playerInput = playerSelection.toLowerCase()
    if (computerSelection == playerSelection) {
        playRound(prompt(), getComputerChoice())
    } else if (computerSelection == "rock" && playerInput == "scizzors") {
        console.log("You Lose! Rock beats Scizzors")
        
    } else if (computerSelection == "rock" && playerInput == "paper") {
        console.log("You Win! Paper beats Rock")
        
    } else if (computerSelection == "scizzors" && playerInput == "rock") {
        console.log("You Win! Rock beats Scizzors")
        
    } else if (computerSelection == "scizzors" && playerInput == "paper") {
        console.log("You Lose! Scizzors beats Paper")
        
    } else if (computerSelection == "paper" && playerInput == "scizzors") {
        console.log("You Win! Scizzors beats Paper")
        
    } else if (computerSelection == "paper" && playerInput == "rock") {
        console.log("You Lost! Paper beats Rock")
        
    } 
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(prompt(), getComputerChoice())
    }
}

game()