"use strict";

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
}

