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

    if(playerSelection == computerSelection){
        computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection);
    }
    if(playerSelection.toUpperCase() == "ROCK"){

        if(computerSelection == "Paper"){
            return("You Lose! Paper beats Rock")
        }
        else if(computerSelection == "Scissors"){
            return("You Win! Rock beats Scissors")
        }
    }

    else if(playerSelection.toUpperCase() == "PAPER"){

        if(computerSelection == "Rock"){
            return("You Win! Paper beats Rock")
        }

        else if(computerSelection == "Scissors"){
            return("You Lose! Scissors beats Paper")
        }
    }

    else if(playerSelection.toUpperCase() == "SCISSORS"){
        
        if(computerSelection == "Rock"){
            return("You Lose! Rock beats Scissors")
        }
        else if(computerSelection == "Paper"){
            return("You Win! Scissors beats Paper")
        }
    }

}



function game(){
    let human, computer;
    for(let i = 1; i < 6; i++){
        console.log("Round " + i + '!')
        valueComp = getComputerChoice();
        let valueHuman = prompt("Rock? Paper? or Scissors?")
        playRound(valueHuman, valueComp)
    }
}

console.log(game())
