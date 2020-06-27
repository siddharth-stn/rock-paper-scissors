"use strict";

const prompt = require('prompt-sync')();


function computerPlay () {
    let comp_choice;
    let rand_num = Math.round(Math.random() * 2 + 1);
    switch (true) {
        case rand_num == 1:
            comp_choice = "Rock";
            break;
        case rand_num == 2:
            comp_choice = "Paper";
            break;
        case rand_num == 3:
            comp_choice = "Scissors";
            break;
        default:
            comp_choice = "default";
    }
    return comp_choice;
}

function playIt (computerSelection, playerSelection) {
    let result;
    if (playerSelection == 4) {
        result = "Wrong Entry by the Human Player";
        return result;
    } else {
        switch (true) {
            case computerSelection == playerSelection:
                result = `Same Selection you are practically brothers form different mothers. Computer chose ${computerSelection}.`;
                break;
            case computerSelection == "Rock" && playerSelection == "Paper":
                result = "You Win! Paper is thin but it covers the Rock. Computer chose Rock.";
                break;
            case computerSelection == "Rock" && playerSelection == "Scissors":
                result = "You Lost this time! Scissors can't cut through a Rock. Computer chose Rock.";
                break;
            case computerSelection == "Paper" && playerSelection == "Rock":
                result = "You Lost this time! Paper is thin but it covers a Rock. Computer chose Paper.";
                break;
            case computerSelection == "Paper" && playerSelection == "Scissors":
                result = "You Win! Your Scissors chewed through the Computer's Paper. Computer chose Paper.";
                break;
            case computerSelection == "Scissors" && playerSelection == "Rock":
                result = "You Win! Computer's Scissors can't cut through your Rock. Computer chose Scissors.";
                break;
            case computerSelection == "Scissors" && playerSelection == "Paper":
                result = "You Lost this time! Computer's Scissors chewed your Paper. Computer chose Scissors.";
                break;
            default:
                break;
        }
    return result;
    }
}

function startPlay (computerSelection) {
    console.log(
        `\nTo play, Enter your selection, then press Enter: 
        Press 1 for Rock,
        Press 2 for Paper,
        Press 3 for Scissor 
        any other selection will be deemed a wrong entry`
        );

        let playerSelection = prompt(); 

        playerSelection = Number(playerSelection);

        if (playerSelection == 1 || playerSelection == 2 || playerSelection == 3) {
            switch (true) {
                case playerSelection == 1:
                    playerSelection = "Rock"
                    break;
                case playerSelection == 2:
                    playerSelection = "Paper"
                    break;
                case playerSelection == 3:
                    playerSelection = "Scissors"
                    break;
                default:
                    break;
            }
        } else {playerSelection = 4}

        let result = playIt(computerSelection, playerSelection); 
        console.log(result);    
}


try {
    let counter = 0;
    while (counter < 5) { 
       startPlay(computerPlay());
       counter += 1;  
    }
} catch (error) {
    error = "Wrong Entry by Human Player";
    console.log(error);
}



