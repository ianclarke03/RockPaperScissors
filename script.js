/*
Your game is going to play against the computer, so begin with a function called getComputerChoice that will 
randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. 
Tip: use the console to make sure this is returning the expected output before moving to the next step!


Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - 
the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
Account for TIES by re-playing the round. 

*/


function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"]

    let item = choices[Math.floor(Math.random()*choices.length)]

    return item
}


function playRound(playerSelection, computerSelection){

    if(playerSelection.toUpperCase() == computerSelection.toUpperCase()){ //if there is a tie
        console.log("It's a tie! Let's play again.");
        computerSelection = getComputerChoice();
        return playRound(playerSelection, computerSelection);
    }

    else if(playerSelection.toUpperCase() == "ROCK"){

        if(computerSelection == "Paper"){
            return(0)
        }
        else if(computerSelection == "Scissors"){
            return(1)
        }
    }

    else if(playerSelection.toUpperCase() == "PAPER"){

        if(computerSelection == "Rock"){
            return(2)
        }

        else if(computerSelection == "Scissors"){
            return(3)
        }
    }

    else if(playerSelection.toUpperCase() == "SCISSORS"){
        
        if(computerSelection == "Rock"){
            return(4)
        }
        else if(computerSelection == "Paper"){
            return(5)
        }
    }

}


function game() {
    for (let i = 1; i < 6; i++) {
        console.log("Round " + i + '!');
        let valueComp = getComputerChoice();
        let valueHuman = prompt("Rock? Paper? or Scissors?");
        let result = playRound(valueHuman, valueComp);

        if (result == 0)
            console.log("You Lose! Paper beats Rock");
        else if (result == 1)
            console.log("You Win! Rock beats Scissors");
        else if (result == 2)
            console.log("You Win! Paper beats Rock");
        else if (result == 3)
            console.log("You Lose! Scissors beats Paper");
        else if (result == 4)
            console.log("You Lose! Rock beats Scissors");
        else if (result == 5)
            console.log("You Win! Scissors beats Paper");
        else {
            console.log("error: idk");
            console.log("computer value = " + valueComp + "    Human input: " + valueHuman);
        }
    }
}

game();

