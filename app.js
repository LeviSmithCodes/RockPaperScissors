let gameChoices = [
  {
    title: "rock",
    winsAgainst: "scissors"
  },
  {
    title: "paper",
    winsAgainst: "rock"
  },
  {
    title: "scissors",
    winsAgainst: "paper"
  }
];

function play(playerChoice) {
  // Determine computer choice
  let computerChoice =
    gameChoices[Math.floor(Math.random() * gameChoices.length)].title;

  // loop over the choices array to find the object that matches the input of the player
  let playerObject = gameChoices.find(
    c => c.title.toLowerCase() == playerChoice.toLowerCase()
  );

  let outcome = "";

  if (playerObject.winsAgainst == computerChoice) {
    outcome = "win!";
  } else if (playerObject.title == computerChoice) {
    outcome = "tie. gg fren";
  } else {
    outcome = "lose. :(";
  }

  document.querySelector(
    "#computer-choice"
  ).innerHTML = `The computer threw ${computerChoice}. You ${outcome}`;
}

function drawButtons() {
  let template = "";
  gameChoices.forEach(item => {
    template += `<button type="button" class="btn btn-outline-primary" data-toggle="button" onclick="play('${item.title}')">${item.title}</button>`;
  });
  // console.log(template);
  document.querySelector("#button-col").innerHTML = template;
}

drawButtons();
