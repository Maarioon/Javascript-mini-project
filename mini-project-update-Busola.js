'use strict';

//let e = i => { console.log(i); }

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

// Placeholder - just hold the results in arrays first
arrMatchResults.push(strResultInput);
e(arrMatchResults);

// Display the most recent match result

function displayMostRecentMatchResult(arrMatchResults) {
    if (arrMatchResults.length === 0) {
      e(`[INFO] Inside displayMostRecentMatchResult | No Match Results to Display`);
      return;
    } else if (arrMatchResults.length === 1) {
      e(`[INFO] Inside displayMostRecentMatchResult | Most Recent Match Result: ${arrMatchResults[0]}`);
    } else if (arrMatchResults.length > 1) {
      e(`[INFO] Inside displayMostRecentMatchResult | Most Recent Match Result: ${arrMatchResults[arrMatchResults.length - 1]}`);
        
    }else {
      e(`[INFO] Inside displayMostRecentMatchResult | Array of Match Results: ${arrMatchResults}`);
    }
}

displayMostRecentMatchResult(arrMatchResults);

// Display all match results
function displayAllMatchResults(arrMatchResults) {
  if (arrMatchResults.length === 0) {
    e(`[INFO] Inside displayAllMatchResults | No Match Results to Display`);
    return;
  } else {
    e(`[INFO] Inside displayAllMatchResults | Array of Match Results: ${arrMatchResults}`);
  }
}

displayAllMatchResults(arrMatchResults);


function main() {
    while (true) {
        const userInput = prompt(`("Enter match result (format: team1 score - score team2, e.g. ${strSampleResult}) or 'exit' to quit: ")`);

        if (userInput.toLowerCase() === "exit") {
            console.log("Exiting program.");
            break;
        }
    }
}


main();
