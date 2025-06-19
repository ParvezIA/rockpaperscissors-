function getComputerPlay() {
    const random = Math.floor(Math.random()*3);
    let rock = "Rock";
    let paper = "Paper";
    let scissor = "Scissor";

    if (random == 0) {
        return rock;
    } else if (random == 1) {
        return paper;
    } else {
        return scissor;
    }
}

getComputerPlay();
