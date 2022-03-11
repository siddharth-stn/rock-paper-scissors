// Write a function computerPlay that randomly selects either of the three options of rock, paper or scissors.
function computerPlay() {
  // store the random choice from 0, 1, or 2 in a variable named randChoice.
  // if randChoice is 0 return ROCK
  // if randChoice is 1 return PAPER
  // if randChoice is 2 return SCISSORS
  const randChoice = Math.floor(Math.random() * 3);
  return randChoice == 0 ? "ROCK" : randChoice == 1 ? "PAPER" : "SCISSORS";
}

// Write a function playRound that takes in parameters playerSelection and computerSelection and returns a string
// that declares the winner of the round either computer or player, like "You Lose! Paper beats Rock". playerSelection should be case insensitive.
function playRound(playerSelection, computerSelection) {
  // if computerSelection is ROCK ----->
  // if playerSelection is PAPER then return "You Win! Paper beats Rock."
  // if playerSelection is ROCK then return "It's a tie. Rock befriends Rock."
  // if playerSelection is SCISSORS then return "You Lose! Rock beats Scissors."
  if (computerSelection == "ROCK") {
    if (playerSelection == "PAPER") {
      return "You Win! Paper beats Rock.";
    } else if (playerSelection == "ROCK") {
      return "It's a tie. Rock befriends Rock.";
    } else if (playerSelection == "SCISSORS") {
      return "You Lose! Rock beats Scissors.";
    }
    // if computerSelection is PAPER ----->
    // if playerSelection is SCISSORS then return "You Win! Scissors beat Paper."
    // if playerSelection is PAPER then return "It's a tie. Paper befriends Paper."
    // if playerSelection is ROCK then return "You Lose! Paper beats Rock."
  } else if (computerSelection == "PAPER") {
    if (playerSelection == "SCISSORS") {
      return "You Win! Scissors beats Paper.";
    } else if (playerSelection == "PAPER") {
      return "It's a tie. Paper befriends Paper.";
    } else if (playerSelection == "ROCK") {
      return "You Lose! Paper beats Rock.";
    }
    // if computerSelection is SCISSORS ----->
    // if playerSelection is ROCK then return "You Win! Rock beats Scissors."
    // if playerSelection is SCISSORS then return "It's a tie. Scissors befriend Scissors."
    // if playerSelection is PAPER then return "You Lose! Scissors beat Paper."
  } else if (computerSelection == "SCISSORS") {
    if (playerSelection == "ROCK") {
      return "You Win! Rock beats Scissors.";
    } else if (playerSelection == "SCISSORS") {
      return "It's a tie. Scissors befriend Scissors.";
    } else if (playerSelection == "PAPER") {
      return "You Lose! Scissors beat Paper.";
    }
  }
}

// Write a function game and call the playRound function inside game to play 5 rounds and keep score. Also report winner or loser at the end.
function game() {
  // create a variable to store no of wins by computer.
  // create another variable to store no. of wins by the player.
  let compWin = 0;
  let playerWin = 0;
  // create a loop and call playRound() function 5 times in it.
  // each iteration should ask for player selection.
  // each iteration should add the number of wins to variable(created above) of the winner.
  playerChoiceLoop: for (let i = 0; i <= 4; i++) {
    let playerChoice = prompt(
      "Enter your selection either ROCK, PAPER or SCISSORS for round number " +
        (i + 1)
    );
    if (playerChoice == null) {
      console.log("Good Bye!");
      return;
    }
    playerChoice = playerChoice.toUpperCase();

    if (
      !(
        playerChoice == "ROCK" ||
        playerChoice == "PAPER" ||
        playerChoice == "SCISSORS"
      )
    ) {
      console.log("Wrong Choice! Select again.");
      i = i - 1;
      continue playerChoiceLoop;
    }
    let winOrLose = playRound(playerChoice, computerPlay());
    console.log(winOrLose);
    if (winOrLose.includes("Win")) {
      playerWin += 1;
    } else if (winOrLose.includes("Lose")) {
      compWin += 1;
    }
  }
  // after the game ends the winner name is printed with the result.
  console.log(`Player Wins: ${playerWin}, Computer Wins: ${compWin}`);
  playerWin > compWin
    ? console.log("Hooray! Player wins the Game.")
    : playerWin < compWin
    ? console.log("Player Lost and Computer Won.")
    : console.log("It's a tie.");
}
//game();