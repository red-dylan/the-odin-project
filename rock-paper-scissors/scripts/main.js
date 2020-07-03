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

function playRound(playerSelection, computerSelection, gameChoices) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    console.log("You select: " + playerSelection);
    console.log("Computer selects: " + computerSelection);
    let result =
        (getSelectionScore(playerSelection, gameChoices) -
            getSelectionScore(computerSelection, gameChoices)) %
        gameChoices.length;
    let outcome = "";
    let winner = "";
    if (result == 0) {
        outcome = "tie!";
    } else if (result == -2 || result == 1) {
        outcome = "You Win! " + playerSelection + " beats " + computerSelection;
        winner = "player";
    } else if (result == -1 || result == 2) {
        outcome =
            "Computer Wins! " + computerSelection + " beats " + playerSelection;
        winner = "computer";
    }
    console.log(outcome);

    return winner;
}

function game() {
    const numRounds = 5;
    const gameChoices = [
        ["rock", 0],
        ["paper", 1],
        ["scissors", 2],
    ];
    let score = [0, 0];
    for (let i = 0; i < numRounds; i++) {
        let playerSelection = window
            .prompt("Rock, Paper, Scissors?")
            .toLowerCase()
            .trim();
        while (!/^(rock|paper|scissors)$/.test(playerSelection)) {
            playerSelection = window
                .prompt(
                    "Invalid entry! Please enter:\nRock, Paper, or Scissors?"
                )
                .toLowerCase();
        }
        let winner = playRound(
            playerSelection,
            computerPlay(gameChoices),
            gameChoices
        );
        if (winner == "player") {
            score[0]++;
        } else if (winner == "computer") {
            score[1]++;
        }
        console.log("Score: " + score[0] + " to " + score[1]);
    }
    console.log();
    if (score[0] > score[1]) {
        console.log("You win " + score[0] + " to " + score[1]);
    } else if (score[0] < score[1]) {
        console.log("Computer wins " + score[0] + " to " + score[1]);
    } else {
        console.log("Tie! " + score[0] + " to " + score[1]);
    }
}
