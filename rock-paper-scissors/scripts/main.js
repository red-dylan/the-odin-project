const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const playerChoice = document.getElementById('player-choice');
const computerChoice = document.getElementById('computer-choice');
const playerScoreboard = document.getElementById('player-score');
const computerScoreboard = document.getElementById('computer-score');
const scoreTitle = document.getElementById('score-title');

function computerPlay(gameChoices) {
    let selection = Math.floor(Math.random() * gameChoices.length);
    return gameChoices[selection][0];
}

function getSelectionScore(selection, gameChoices) {
    let selectionScore = -1;
    for (let i = 0; i < gameChoices.length; i++) {
        if (selection == gameChoices[i][0]) {
            selectionScore = gameChoices[i][1];
            return selectionScore;
        }
    }
}

function playRound(playerSelection, gameChoices, score) {
    computerSelection = computerPlay(gameChoices);
    playerChoice.textContent = playerSelection;
    computerChoice.textContent = computerSelection;

    let result =
        (getSelectionScore(playerSelection, gameChoices) -
            getSelectionScore(computerSelection, gameChoices)) %
        gameChoices.length;

    if (result == 0) {
        // tie
    } else if (result == -2 || result == 1) {
        // player wins
        score[0]++;
        playerScoreboard.textContent = score[0];
    } else if (result == -1 || result == 2) {
        // computer wins
        score[1]++;
        computerScoreboard.textContent = score[1];
    }

    if (score[0] === 5) {
        scoreTitle.textContent = 'YOU WIN!';
    } else if (score[1] === 5) {
        scoreTitle.textContent = 'COMPUTER WINS!';
    }
}

function playGame() {
    const gameChoices = [
        ['ROCK', 0],
        ['PAPER', 1],
        ['SCISSORS', 2],
    ];

    let score = [0, 0];

    rockBtn.addEventListener('click', () => {
        playRound('ROCK', gameChoices, score);
    });
    paperBtn.addEventListener('click', () => {
        playRound('PAPER', gameChoices, score);
    });
    scissorsBtn.addEventListener('click', () => {
        playRound('SCISSORS', gameChoices, score);
    });
}

playGame();
