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