const startBtn = document.querySelector(".startBtn");
const rpsButtonDivs = Array.from(document.querySelector(".rpsBtn").children);
const bannerHeading = document.querySelector(".bannerHeading");
const paraOne = document.querySelector(".paraOne");
const paraTwo = document.querySelector(".paraTwo");
const finalResultPara = document.querySelector(".finalResultPara");
const roundOne = document.querySelector(".roundOne");
const roundTwo = document.querySelector(".roundTwo");
const roundThree = document.querySelector(".roundThree");
const roundFour = document.querySelector(".roundFour");
const roundFive = document.querySelector(".roundFive");

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

let playAgain; //control the game flow (to reset when the game)

// Write a function game and call the playRound function inside game to play 5 rounds and keep score. Also report winner or loser at the end.
function game() {
  if (playAgain) {
    roundOne.textContent = "Round One: awaited...";
    roundTwo.textContent = "Round Two: awaited...";
    roundThree.textContent = "Round Three: awaited...";
    roundFour.textContent = "Round Four: awaited...";
    roundFive.textContent = "Round Five: awaited...";
    finalResultPara.textContent = "Awaited...";
    paraOne.textContent = "Press Play Again Button to start the game";
  }

  playAgain = false;
  startBtn.style.display = "none";
  paraOne.textContent = "Click any button below to make your choice";

  // Add a class onHover to the rps button divs to make them payable
  rpsButtonDivs.forEach((div) => {
    div.classList.add("onHover");
  });

  bannerHeading.textContent = "Game Events";
  paraTwo.textContent = "";
  roundOne.textContent = "*Round One: awaited...";

  // create a variable to store no of wins by computer.
  // create another variable to store no. of wins by the player.
  let compWin = 0;
  let playerWin = 0;
  let roundCount = 1;
  let roundWinner;

  // call the playRound() function when any of the three buttons are clicked anc check against the
  // choice by the computer

  let playerChoice = null;
  let deductOne = false; // to deduct one from roundCount when there is a tie.

  function rpsButtonClick(e) {
    if (e.target.id === "ROCK") {
      playerChoice = "ROCK";
    } else if (e.target.id === "PAPER") {
      playerChoice = "PAPER";
    } else playerChoice = "SCISSORS";

    let winOrLose = playRound(playerChoice, computerPlay());
    paraOne.textContent = winOrLose;
    if (winOrLose.includes("Win")) {
      playerWin += 1;
      roundWinner = "You won this Round";
    } else if (winOrLose.includes("Lose")) {
      compWin += 1;
      roundWinner = "Computer Wins this round";
    } else {
      deductOne = true; //to deduct one from roundCount below in this function
      roundWinner = "Play this round again.";
    }

    switch (roundCount) {
      case 1:
        roundOne.textContent = `Round One: ${roundWinner}`;
        roundTwo.textContent = `*Round Two: awaited...`;
        break;
      case 2:
        roundTwo.textContent = `Round Two: ${roundWinner}`;
        roundThree.textContent = `*Round Three: awaited...`;
        break;

      case 3:
        roundThree.textContent = `Round Three: ${roundWinner}`;
        roundFour.textContent = `*Round Four: awaited...`;
        break;

      case 4:
        roundFour.textContent = `Round Four: ${roundWinner}`;
        roundFive.textContent = `*Round Five: awaited...`;
        break;

      case 5:
        roundFive.textContent = `Round Five: ${roundWinner}`;
        break;
    }
    if (deductOne) {
      deductOne = false;
    } else {
      roundCount += 1;
    }

    if (roundCount > 5) {
      rpsButtonDivs.forEach((div) =>
        div.removeEventListener("click", rpsButtonClick)
      );
      rpsButtonDivs.forEach((div) => {
        div.classList.remove("onHover");
      });
      if (playerWin > compWin) {
        finalResultPara.textContent = "Hurray! You won the battle.";
      } else {
        finalResultPara.textContent = "Sorry, you lost this game.";
      }

      playAgain = true;
      if (playAgain) {
        startBtn.style.display = "block";
        startBtn.textContent = "Play Again";
        startBtn.addEventListener("click", game);
      }

      return;
    }
  }

  rpsButtonDivs.forEach((div) => div.addEventListener("click", rpsButtonClick)); // call rpsButtonClick to listen to click on the three buttons
}

startBtn.addEventListener("click", game, { once: true });
