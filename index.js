
function getHumanChoice() {
    let askHuman= prompt("Select rock, Paper or scissors" );

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

console.log("You pick :", getHumanChoice());


console.log("computer picks :", getComputerChoice());
