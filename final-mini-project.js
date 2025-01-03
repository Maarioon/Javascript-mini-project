
const PLTeams = ["Arsenal", "Aston Villa", "Bournemouth", "Brentford", "Brighton & Hove Albion", "Burnley", "Chelsea", "Crystal Palace", "Everton", "Fulham", "Liverpool", "Luton Town", "Manchester City", "Manchester United", "Newcastle United", "Nottingham Forest", "Sheffield United", "Tottenham Hotspur", "West Ham United", "Wolverhampton Wanderers"];
let matchResults = [];
const userInput = prompt("Enter Team Name : ");
console.log (userInput);
// function displayResults() {
//     if (matchResults.length === 0) {
//         alert("Thank you!")
//     };
//     // if (Number){(matchResults != 0);
//     // }; else {
//     //     console.log(matchResults != 0);
//     // }
// }
// displayResults();

// function RecentResults() {
//     if (matchResults => 0) {
//         // console.log(`"match results = "[${matchResult}]`)
//         alert("wow!, Thanks!")
//     };
// }

function allMatchResult () {
    while (true) {
        const userInput = prompt("Enter match result (format: team1 score - score team2) or 'exit' to quit: ");

        if (userInput.toLowerCase() === "exit") {
            console.log("Exiting program.");
            break;
        }
    }
}