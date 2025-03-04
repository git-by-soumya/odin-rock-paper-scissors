function getComputerChoice() {
    let randomResult = 0;
    randomResult = Math.floor( Math.random() * 10 );
    
    if (randomResult >= 0 && randomResult <= 3) {
        return "rock";
    } 
    else if (randomResult >= 4 && randomResult <= 6) {
        return "paper";
    }
    else if (randomResult >= 7 && randomResult <= 9) {
        return "scissors";
    }
    /*
    This else statement is technically unreachable with the current logic, 
    but it's here to handle unexpected cases.
    */
    else {
        return "Wrong choice!";
    }
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Draw! ${humanChoice} vs ${computerChoice}`);
    }

    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock");
        ++computerScore;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        ++humanScore;
    }

    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beat Paper");
        ++computerScore;
    }
    else if(humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        ++humanScore;
    }

    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors");
        ++computerScore;
    }
    else if(humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beat Paper");
        ++humanScore;
    }
}

function buttonEventHandler(event) {
    const target = event.target;

    if(target.tagName !== "BUTTON") return;

    let computerSelection = getComputerChoice();
    
    switch(target.className) {
        case "rock-button":
            playRound("rock", computerSelection);
            break;
        case "paper-button":
            playRound("paper", computerSelection);
            break;
        case "scissors-button":
            playRound("scissors", computerSelection);
            break;
        default:
            console.log("Wrong target!");
    }
}

const doc = document;
doc.addEventListener("click", buttonEventHandler);

/*
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", buttonEventHandler);
});
*/

/*
function playGame() {
    for (let i = 1; ; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        
        if ( (humanSelection === "rock" || 
            humanSelection === "paper" || 
            humanSelection === "scissors") 
            && 
            (computerSelection === "rock" || 
                computerSelection === "paper" || 
                computerSelection === "scissors") 
            ) {
                playRound(humanSelection, computerSelection);
        } 
        else {
            console.log("Wrong choice! Exiting game.");
            break;
        }
    }
    
    if (humanScore > computerScore) {
        console.log(
            "You win the game! " + 
            `Human score: ${humanScore}, Computer score: ${computerScore}`);
    }
    else if (computerScore > humanScore) {
        console.log(
            "Computer wins the game! " + 
            `Computer score: ${computerScore}, Human score: ${humanScore}`);
    }
    else {
        console.log(
            "The game is a draw. " + 
            `Computer score: ${computerScore}, Human score: ${humanScore}`);
    }
}
*/

/*
function getHumanChoice() {
    let choice = 0;
    choice = +prompt(
        "Enter a digit (1 for ROCK, 2 for PAPER, or 3 for SCISSORS) : "
    );

    switch(choice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
        default:
            return "Wrong choice!";
    }
}
*/
