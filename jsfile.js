const buttons = document.querySelectorAll('.button');
const reset = document.querySelector('.resetButton');
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("ai-score");
const images = document.querySelectorAll("img");
const results = document.querySelectorAll(".result");

const options = ["rock", "paper", "scissors"];
const playerImg = ["p0", "p1", "p2"];
const computerImg = ["c0", "c1", "c2"];

buttons.forEach(button => {
    button.onclick = playerMove;
})

reset.onclick = () => {
    playerScore.textContent = "0";
    computerScore.textContent = "0";
};

function playerMove() {
    this.classList.add("chosen");
    document.getElementById(playerImg[this.id]).classList.add("visible");

    playRound(this.id, computerMove());
    setTimeout(removeClass, 1000);
}

function computerMove() {
    let computerChoice = Math.floor(Math.random()*3);

    setTimeout(() => {
        document.getElementById(options[computerChoice]).classList.add("chosen");
        document.getElementById(computerImg[computerChoice]).classList.add("visible");
    }, 500);

    return computerChoice;

}

function playRound (playerChoice, computerChoice) {
    let diff = playerChoice - computerChoice;
    if (diff == 2 || diff == -1) setTimeout(scorePoint, 1000, computerScore);
    else if (diff == 1 || diff == -2) setTimeout(scorePoint, 1000, playerScore);
}

function scorePoint (score) {
    let currentScore = +score.textContent;
    score.textContent = currentScore + 1;
    
    score.classList.add("plus-one");
    
    setTimeout(() => {score.classList.remove("plus-one");}, 500);
}

function removeClass () {
    results.forEach((result) => {result.classList.remove("chosen");});
    buttons.forEach((button) => {button.classList.remove("chosen");});
    images.forEach((image) => {image.classList.remove("visible");});
}