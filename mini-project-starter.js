'use strict';

/*
* Write a program that keeps scores from Premier League football matches.
* The input must be only limited to teams currently in the premier league this current season of 2024/25
* The user input must be received via prompt
* Each input must follow the format of team1 score - score team2
* E.g. Arsenal 1 - 2 Ipswich
* Another e.g. Man City 0 - 7 Man United
* Any popular version of the team names are acceptable such as Man City for Manchester City.
* Once input is received, store the match results as individuals objects within a containing array.
* Write functions to display the most recent match results and also all match results.
*/

function e(i){
    console.log(i);
}

//========Main Program Starts Here==========//
let strResultInput = prompt("Enter Match Result in the Format 'Team 1 score - score Team 2' e.g. Fulham 1 - 2 Arsenal", 'Fulham 1 - 2 Arsenal');
e(strResultInput);
