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

function e(i) {
  console.log(i);
}

function quickCheckUserInput(strMatchResult){
  let boolValidInput = false;

  if (strMatchResult){
    let arrTeamAndScore = strMatchResult.split('-');
    e(`[INFO] Inside quickCheckUserInput | Array of Team and Score: ${arrTeamAndScore} | Lenght of the Array: ${arrTeamAndScore.length}`);
    boolValidInput = (arrTeamAndScore.length === 2);
  }

  return boolValidInput;
}

//========Main Program Starts Here==========//
let arrMatchResults = [];

const strSampleResult = 'Fulham 1 - 2 Arsenal';

let strResultInput = prompt(
  `Enter Match Result in the Format 'Team 1 score - score Team 2' e.g. ${strSampleResult}`,
  strSampleResult
);

e(strResultInput);

if (quickCheckUserInput(strResultInput)) {
  e('User Input appears to be valid.......');
} else {
  e(`[ERROR] User Input [${strResultInput}] is NOT a valid match result.`);
}

//Placeholder - just hold the results in arrays first
//arrMatchResults.push(strResultInput);
//e(arrMatchResults);