'use strict';

/*
 * Premier League Score Keeper
 * This program records scores from Premier League matches for the 2024/25 season.
 * Input is received in the format: team1 score - score team2 (e.g., Arsenal 1 - 2 Ipswich).
 * Results are stored as objects in an array, and users can view the most recent or all match results.
 */

// Helper function for logging
function e(i) {
    console.log(i);
}

// Validates the user's input format
function quickCheckUserInput(strMatchResult) {
    if (strMatchResult) {
        const arrTeamAndScore = strMatchResult.split('-');
        e(`[INFO] Inside quickCheckUserInput | Array of Team and Score: ${arrTeamAndScore}`);
        return arrTeamAndScore.length === 2;
    }
    return false;
}

// Extracts team names and scores from input
function extractTeamNamesAndScores(strMatchResult) {
    const objMatchResult = {};
    const arrTeamAndScore = strMatchResult.split('-');
    const arrTeam1 = arrTeamAndScore[0].trim().split(' ');
    const arrTeam2 = arrTeamAndScore[1].trim().split(' ');

    const team1Score = arrTeam1.pop();
    const team2Score = arrTeam2.shift();

    const team1Name = arrTeam1.join(' ');
    const team2Name = arrTeam2.join(' ');

    objMatchResult[team1Name] = parseInt(team1Score, 10);
    objMatchResult[team2Name] = parseInt(team2Score, 10);

    return objMatchResult;
}

// Displays the most recent match result
function displayMostRecentMatchResult(arrMatchResults) {
    if (arrMatchResults.length === 0) {
        e(`[INFO] No Match Results to Display`);
    } else {
        e(`[INFO] Most Recent Match Result: ${JSON.stringify(arrMatchResults[arrMatchResults.length - 1])}`);
    }
}

// Displays all match results
function displayAllMatchResults(arrMatchResults) {
    if (arrMatchResults.length === 0) {
        e(`[INFO] No Match Results to Display`);
    } else {
        e(`[INFO] All Match Results:`);
        arrMatchResults.forEach((result, index) => {
            e(`[Match ${index + 1}] ${JSON.stringify(result)}`);
        });
    }
}

// Main program loop
function main() {
    const arrMatchResults = [];
    const strSampleResult = 'Fulham 1 - 2 Arsenal';

    while (true) {
        const userInput = prompt(
            `Enter match result in the format "Team1 score - score Team2" (e.g., ${strSampleResult}) or type "exit" to quit:`,
            strSampleResult
        );

        if (userInput.toLowerCase() === 'exit') {
            e('Exiting program.');
            break;
        }

        if (quickCheckUserInput(userInput)) {
            e('[INFO] User Input appears to be valid.');
            const matchResult = extractTeamNamesAndScores(userInput);
            arrMatchResults.push(matchResult);
            e('[INFO] Match Result Stored Successfully.');
        } else {
            e(`[ERROR] Invalid input format: "${userInput}". Please try again.`);
        }

        // Menu for displaying results
        const action = prompt('Type "recent" to view the most recent match result, "all" to view all results, or "continue" to add more results:').toLowerCase();
        if (action === 'recent') {
            displayMostRecentMatchResult(arrMatchResults);
        } else if (action === 'all') {
            displayAllMatchResults(arrMatchResults);
        }
    }
}

// Start the program
main();
