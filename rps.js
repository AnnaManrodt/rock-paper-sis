let userWin = 0;
let userTie = 0;
let userLose = 0;

function determineGameState(userChoice, computerChoice) {
  let gameState = '';
  if (userChoice == computerChoice) {
    gameState = 'You tied!';
    userTie++;
  } else {
    if (choices.indexOf(userChoice) > choices.indexOf(computerChoice)) {
      if ((userChoice == "S" && computerChoice == "R")) {
        gameState = "You lose!"
        userLose++;
      } else {
        gameState = "You win!";
        userWin++;
      }
    } else {
    if ((userChoice == "R" && computerChoice == "S")) {
        gameState = "You win!"
        userWin++;
      }else{
        gameState = "You lose!"
        userLose++;
      }
    }
  }

  return {
    userChoice: userChoice,
    computerChoice: computerChoice,
    gameState: gameState
  };
}

function displayGameState(gameState) {
  alert(`User selected: ${gameState.userChoice}\nComputer selected:${gameState.computerChoice}\n${gameState.gameState}!!`);
}

function displaySessionState() {
  alert(`User Wins: ${userWin}\n
  User Losses: ${userLose}\n
  User Ties: ${userTie}`);
}

const choices = ["R", "P", "S"];

let play = confirm("Do you wanna play a game?");
while (play === true) {
  let choice = prompt("Pick R, P, S");
  choice = choice.toUpperCase();
  const compChoice = choices[Math.floor(Math.random() * choices.length)];

  if (choice !== "R" &&
    choice !== "P" &&
    choice !== "S") {
    alert("Invaild choice. Try again.")
    continue;
  } else {
    let gameState = determineGameState(choice, compChoice);
    displayGameState(gameState);
    displaySessionState();
  }
  play = confirm("Do you wanna play a game?");
}
alert("See ya next time!");
