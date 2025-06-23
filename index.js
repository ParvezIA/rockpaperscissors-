
function getHumanChoice() {
    let askHuman= prompt("Select rock, Paper or scissors" ); 
}

function getComputerChoice() {
    const random = Math.floor(Math.random()*3);

    if (random == 0) {
        return "rock";
    } else if (random == 1) {
        return "paper";
    } else {
        return "scissor";
    }
} 

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice == "rock" && computerChoice == "rock") {
        console.log("its a draw");
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("computer wins"); 
        computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissor") {
        console.log("you win, rock beats sissor");
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("you win, paper beats rock");
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        console.log("its a draw"); 
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("computer wins");
    computerScore++;
    } else if (humanChoice == "scissor" && computerChoice == "rock") {
        console.log("computer wins");
        computerScore++;
    } else if (humanChoice == "scissor" && computerChoice == "paper") {
        console.log("you win, scissor beats paper"); 
        humanScore++;
    } else if (humanChoice == "scissor" && computerChoice == "scissor") {
        console.log("its a draw");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);