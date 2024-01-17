/*
Your game is going to play against the computer, so begin with a function called getComputerChoice that will 
randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. 
Tip: use the console to make sure this is returning the expected output before moving to the next step!


Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - 
the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
Account for TIES by re-playing the round. 

*/

/*
1) For now, remove the logic that plays exactly five rounds.

2) Create three buttons, one for each selection. Add an event listener to the buttons 
that call your playRound function with the correct playerSelection every time a button is clicked. 
(you can keep the console.logs for this step)

3) Add a div for displaying results and change all of your console.logs into DOM methods.

4) Display the running score, and announce a winner of the game once one player reaches 5 points.

5) You will likely have to refactor (rework/rewrite) your original code to make it work for this. 
That’s OK! Reworking old code is an important part of a programmer’s life.
*/

function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"]

    let item = choices[Math.floor(Math.random()*choices.length)]

    return item
}


let playerscore = 0;
let compscore = 0;
const scoreDiv = document.createElement('div');
const resultDiv = document.createElement('div');

// rest of your code...


function playRound(playerSelection, computerSelection) {
    //const resultDiv = document.getElementById('result');
    
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        resultDiv.textContent = "It's a tie! Let's play again.";
        computerSelection = getComputerChoice();
        return playRound(playerSelection, computerSelection);
    } else if (playerSelection.toUpperCase() === "ROCK") {
        if (computerSelection === "Paper") {
            resultDiv.textContent = "You Lose! Paper beats Rock";
            compscore++
        } else if (computerSelection === "Scissors") {
            resultDiv.textContent = "You Win! Rock beats Scissors";
            playerscore++
        }
    } else if (playerSelection.toUpperCase() === "PAPER") {
        if (computerSelection === "Rock") {
            resultDiv.textContent = "You Win! Paper beats Rock";
            playerscore++
        } else if (computerSelection === "Scissors") {
            resultDiv.textContent = "You Lose! Scissors beats Paper";
            compscore++
        }
    } else if (playerSelection.toUpperCase() === "SCISSORS") {
        if (computerSelection === "Rock") {
            resultDiv.textContent = "You Lose! Rock beats Scissors";
            compscore++
        } else if (computerSelection === "Paper") {
            resultDiv.textContent = "You Win! Scissors beats Paper";
            playerscore++
        }
    }

    scoreDiv.textContent = `Player: ${playerscore} | Computer: ${compscore}`;


    if(playerscore == 5 || compscore == 5){
        if(playerscore == 5){
            resultDiv.textContent = "You Won!"
        }
        else if(compscore == 5){
            resultDiv.textContent = "You Lose! Try Again."
        }
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}



const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";

document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissors);
document.body.appendChild(resultDiv);
document.body.appendChild(scoreDiv);

rock.addEventListener('click', () => {
    let valueComp = getComputerChoice();
    let valueHuman = "ROCK";
    console.log(playRound(valueHuman, valueComp));
  });


paper.addEventListener('click', () => {
    let valueComp = getComputerChoice();
    let valueHuman = "PAPER";
    console.log(playRound(valueHuman, valueComp));
  });

scissors.addEventListener('click', () => {
    let valueComp = getComputerChoice();
    let valueHuman = "SCISSORS";
    console.log(playRound(valueHuman, valueComp));
  });


//const listItem = document.createElement('li');











/*
function game() {
    
    for (let i = 1; i < 6; i++) {
        console.log("Round " + i + '!');
        let valueComp = getComputerChoice();
        let valueHuman = prompt("Rock? Paper? or Scissors?");
        let result = playRound(valueHuman, valueComp);
    }
    
}

game();
*/