function getComputerChoice() {
    /*
    Plan:
    UI: console (F12 -> Console)
    Input: none
    Output: randomly return one of the following string values - "rock", "paper" or "scissors"
    Pseudocode:
    */

    //Initialize a variable randomResult to 0, to later hold a random number between 0 and 9, inclusive.
    let randomResult = 0;
    //Get a random number between 0 and 1, multiply it with 10, and round it down to remove the decimal part.
    //Assign the above value to randomResult.
    randomResult = Math.floor( Math.random() * 10 );
    //If the value in randomResult is between 0 and 3, inclusive
    //    return "rock"
    if (randomResult >= 0 && randomResult <= 3) {
        return "rock";
    } 
    //Else if the value in randomResult is between 4 and 6, inclusive
    //    return "paper"
    else if (randomResult >= 4 && randomResult <= 6) {
        return "paper";
    }
    //Else if the value in randomResult is between 7 and 9, inclusive
    //    return "scissors"
    else if (randomResult >= 7 && randomResult <= 9) {
        return "scissors";
    }
    //This else statement is technically unreachable with the current logic, but it's here to handle unexpected cases.
    else {
        return "Wrong choice!";
    }
}

function getHumanChoice() {
    /*
    Plan:
    UI: console
    Input: none at first, but will take input through a prompt
    Output: return one of the valid choices ("rock", "paper", or "scissors") depending on what the user inputs
    Pseudocode:
    */

    // Initialize a variable choice to 0.
    let choice = 0;
    // Get the user choice: 1 for "rock", 2 for "paper", or 3 for "scissors", and store this value in choice
    choice = +prompt("Enter a digit (1 for ROCK, 2 for PAPER, or 3 for SCISSORS) : ");
    // Return the appropriate string for the user choice, with appropriate logic for wrong values
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


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        /*
        Plan:
        UI: console
        input: human choice and computer choice as arguments, 
                both should have been validated before passing, 
                pass lowercase "rock", "paper", or "scissors"
        output: a string value representing the round winner, such as: “You lose! Paper beats Rock”, 
                also increment global score-tracking variables based on the round winner
        Pseudocode:
        */
    
        // If both human choice and computer choice values match
        //    Display the following message: "Draw!" with the choices appended after it
        if (humanChoice === computerChoice) {
            console.log(`Draw! ${humanChoice} vs ${computerChoice}`);
        }
    
        // Else if human choice is "rock" and
        //    If computer choice is "paper"
        //        Display the following message: "You lose! Paper beats Rock"
        //        Increment the computer score variable
        //    Else if computer choice is "scissors"
        //        Display the following message: "You win! Rock beats Scissors"
        //        Increment the human score variable
        else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats Rock");
            ++computerScore;
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors");
            ++humanScore;
        }
    
        // Else if human choice is "paper" and
        //    If computer choice is "scissors"
        //        Display the following message: "You lose! Scissors beat Paper"
        //        Increment the computer score variable
        //    Else if computer choice is "rock"
        //        Display the following message: "You win! Paper beats Rock"
        //        Increment the human score variable
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beat Paper");
            ++computerScore;
        }
        else if(humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            ++humanScore;
        }
        
        // Else if human choice is "scissors" and
        //    If computer choice is "rock"
        //        Display the following message: "You lose! Rock beats Scissors"
        //        Increment the computer score variable
        //    Else if computer choice is "paper"
        //        Display the following message: "You win! Scissors beat Paper"
        //        Increment the human score variable
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors");
            ++computerScore;
        }
        else if(humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beat Paper");
            ++humanScore;
        }
    }

    /*
    Plan:
    Play 5 rounds by calling playRound 5 times
    Pseudocode:
    */

    // Loop (5 times) where sentry (loop control variable) = 1, start = 1, end = 5, inclusive, change/update value = +1
    for (let i = 1; i <= 5; i++) {
        // Declare and initialize variables humanSelection and computerSelection by calling functions getHumanChoice and getComputerChoice
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        // If humanSelection and computerSelection have contents equal to any of the following 3 string values: "rock", "paper", or "scissors"
        if ( (humanSelection === "rock" || 
            humanSelection === "paper" || 
            humanSelection === "scissors") 
            && 
            (computerSelection === "rock" || 
                computerSelection === "paper" || 
                computerSelection === "scissors") 
            ) {
                // Call function playRound and pass it humanSelection and computerSelection as arguments
                playRound(humanSelection, computerSelection);
            } 
        // Else
        //  Display message "Wrong choice! Exiting game."
        //  Break from the loop
        else {
            console.log("Wrong choice! Exiting game.");
            break;
        }
    }
    //If human score is greater than computer score
    //  Display "You win the game!" and append scores at the end
    if (humanScore > computerScore) {
        console.log(`You win the game! Human score: ${humanScore}, Computer score: ${computerScore}`);
    }
    //Else if computer score is greater than human score
    //  Display "Computer wins the game!" and append scores at the end
    else if (computerScore > humanScore) {
        console.log(`Computer wins the game! Computer score: ${computerScore}, Human score: ${humanScore}`);
    }
    //Else
    //  Display "The game is a draw." and append scores at the end
    else {
        console.log(`The game is a draw. Computer score: ${computerScore}, Human score: ${humanScore}`);
    }
    //End if
}