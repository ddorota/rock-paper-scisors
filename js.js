let yourScore = 0;
let compScore = 0;
const yourScoreFromBoard = document.getElementById('you-score');
const compScoreFromBoard = document.getElementById('comp-score');
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result >p");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function computerMove(){
    const choices = ['rock', 'paper' , 'scissors'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}
function win(yourChoice,compChoice){
yourScore++;
yourScoreFromBoard.innerHTML=yourScore;
compScoreFromBoard.innerHTML=compScore;
result.innerHTML= yourChoice + " beat " + compChoice + ". You WIN!";
}
function lose(yourChoice,compChoice){
compScore++;
yourScoreFromBoard.innerHTML=yourScore;
compScoreFromBoard.innerHTML=compScore;
result.innerHTML= compChoice + " beat " + yourChoice + ". You LOSE!";
}
function draw(yourChoice,compChoice){
    yourScoreFromBoard.innerHTML=yourScore;
    compScoreFromBoard.innerHTML=compScore;
    result.innerHTML= "DRAW";
}
function game(yourChoice){
    const compChoice = computerMove();
    switch(yourChoice + compChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
        win(yourChoice,compChoice);
        break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrosk":
        lose(yourChoice,compChoice);
        break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        draw(yourChoice,compChoice);
        break;
    }
}

function main(){
rock.addEventListener('click', function () {
    game('rock')
})
paper.addEventListener('click', function () {
    game('paper')
})
scissors.addEventListener('click', function () {
    game('scissors')
})
}
main();