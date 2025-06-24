
function getHumanChoice() {
    let askHuman= prompt("Select rock, Paper or scissor" ); 
    return askHuman;
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


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let i;

    function playRound(humanChoice, computerChoice) {

    console.log("you chose :" + humanChoice);
    console.log("computer chose :" + computerChoice);

     humanChoice = humanChoice.toLowerCase();

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
    } else if (humanChoice == "paper" && computerChoice == "scissor") {
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
    } else {
        alert("Please enter Rock, Paper or Scissor")
    }
}

for (i = 0; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}

if (humanScore > computerScore) {
    console.log("Your score is " + humanScore, "\ncomputer score is " + computerScore, "\nYour the winner of this Round ");
} else if (humanScore < computerScore) {
    console.log("Your score is " + humanScore, "\ncomputer score is " + computerScore, "\nYour the winner of the Round ");
} else {
    console.log("Your score is " + humanScore, "\ncomputer score is " + computerScore, "\nBoth have same point, it's a draw");
}

}

playGame();