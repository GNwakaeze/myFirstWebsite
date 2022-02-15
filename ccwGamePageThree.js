/* for now this is a console game with alerts. You'll change this into a browser game by adding
- a label/input bar & button into the html & refeerncing them using doc.queryselector
- a paragraph and code to keep track of the score 
- go back to the MDn lesson hon how to customise your alerts? */

let ccwResult = '';

function playCCW() {
    const choice = ['rock', 'paper', 'scissors'];

    function getPlayerChoice() {
        const pick = prompt('Pick rock, paper or scissors:').toLowerCase();
        return pick;
    }

    function getComputerChoice() {
        const random = Math.floor(Math.random()*choice.length);
        return choice[random];
    }

    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();

    const resultDraw = (`Draw: You both chose ${computerChoice}`);
    const resultLose = (`Computer Won: ${computerChoice} beats ${playerChoice}`);
    const resultWin = (`Player Won: ${playerChoice} beats ${computerChoice}`);

    if (playerChoice == 'rock' ||playerChoice == 'paper'||playerChoice == 'scissors') {
        if (playerChoice == computerChoice) {
            alert('IT\'S A DRAW!');
            ccwResult = resultDraw;
            return ccwResult;
        } else if ((playerChoice == 'rock' && computerChoice == 'paper') || (playerChoice == 'paper' && computerChoice == 'scissors') || (playerChoice == 'scissors' && computerChoice == 'rock')) {
            alert(`YOU LOSE! ${computerChoice} beats ${playerChoice}`)
            ccwResult =resultLose;
            return ccwResult;
        } else {
            alert(`YOU WIN!! ${playerChoice} beats ${computerChoice}`);
            ccwResult =resultWin;
            return ccwResult;
        }
    } else {
    alert('That\'s not an option hun')
    }
}
//this allows 5 rounds of CCW and puts the result in the console
function fullGame() {
    for (let round = 1; round<6; round++) {
        playCCW();
        console.log(`Round: ${round} = ${ccwResult}`);
    }
}