let gameChoices = [
  {
    title: "rock",
    winsAgainst: ["scissors", "lizard"]
  },
  {
    title: "paper",
    winsAgainst: ["rock", "spock"]
  },
  {
    title: "scissors",
    winsAgainst: ["paper", "lizard"]
  },
  {
    title: "lizard",
    winsAgainst: ["paper", "spock"]
  },
  {
    title: "spock",
    winsAgainst: ["scissors", "rock"]
  }
];

let playerWins = 0;
let playerLosses = 0;

function play(playerChoice) {
  // Determine computer choice
  let computerChoice =
    gameChoices[Math.floor(Math.random() * gameChoices.length)].title;

  // loop over the choices array to find the object that matches the input of the player
  let playerObject = gameChoices.find(
    c => c.title.toLowerCase() == playerChoice.toLowerCase()
  );

  let outcome = "";

  if (playerObject.winsAgainst.includes(computerChoice)) {
    outcome = "win!";
    playerWins += 1;
  } else if (playerObject.title == computerChoice) {
    outcome = "tie. gg fren.";
  } else {
    outcome = "lose. :(";
    playerLosses += 1;
  }

  document.querySelector(
    "#computer-choice"
  ).innerHTML = `The computer threw ${computerChoice}. You ${outcome} <br>Click a button to play again!`;

  drawWinLoss();
}

function drawButtons() {
  let template = "";
  gameChoices.forEach(item => {
    template += `<button type="button" class="btn btn-secondary" data-toggle="button" onclick="play('${item.title}')">${item.title}</button>`;
  });
  document.querySelector("#button-col").innerHTML = template;
}

function drawWinLoss() {
  document.querySelector(
    "#win-loss"
  ).innerHTML = `Your wins: ${playerWins} <br> Your losses: ${playerLosses}`;
}

drawButtons();
drawWinLoss();
