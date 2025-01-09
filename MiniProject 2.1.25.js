// Write a program that keeps scores from Premier League football matches.
// The input must be only limited to teams currently in the premier league this current season of 2024/25
// The user input must be received via prompt
// Each input must follow the format of team1 score - score team2
// E.g. Arsenal 1 - 2 Ipswich
// Another e.g. Man City 0 - 7 Man United
// Any popular version of the team names are acceptable such as Man City for Manchester City.
// Once input is received, store the match results as individuals objects within a containing array.
// Write functions to display the most recent match results and also all match results.

function getTeamIndex(teamName) {
    return PLTeams.indexOf(teamName);
}



const PLTeams = ["Arsenal", "Aston Villa", "Bournemouth", "Brentford", "Brighton & Hove Albion", "Burnley", "Chelsea", "Crystal Palace", "Everton", "Fulham", "Liverpool", "Luton Town", "Manchester City", "Manchester United", "Newcastle United", "Nottingham Forest", "Sheffield United", "Tottenham Hotspur", "West Ham United", "Wolverhampton Wanderers"];

let matchResults = [];
const userInput = prompt(`"Enter Team Name" ${teamName}: `);

console.log (userInput);

function displayResults() {
    if (Number)(matchResults.length === 0) {
        console.log("No match results to display")
    };
    if (Number){(matchResults != 0);
        
    } else {
        console.log(matchResults != 0);
    } 
}    


const PLTeams = ["Arsenal", "Aston Villa", "Bournemouth", "Brentford", "Brighton & Hove Albion", "Burnley", "Chelsea", "Crystal Palace", "Everton", "Fulham", "Liverpool", "Luton Town", "Manchester City", "Manchester United", "Newcastle United", "Nottingham Forest", "Sheffield United", "Tottenham Hotspur", "West Ham United", "Wolverhampton Wanderers"];

let matchResults = [];
const userInput = prompt("Enter Team Name : ");

console.log (userInput);

function displayResults() {
    if (matchResults.length === 0) {
        console.log("No match results to display")
    };
    // if (Number){(matchResults != 0);
        
    // }; else {
    //     console.log(matchResults != 0);
    // } 
}    

displayResults();



// let matchResults = [];
// const userInput = prompt("Enter Team Name: ")

// console.log(userInput);




let indexOfPLTeams = PLTeams.indexOf("Arsenal");


let scores = [

    {
        team1 =
        _Score: Number(prompt("Please enter Team 1 score")), 
    },
    
    {
        team2_Score: Number(prompt("Please enter Team 2 score")),
    },
    
    ];
    
    scores[0].team1_Score = scores[0].team1_Score ? scores[0].team1_Score : 0;
    console.log(scores[0].team1_Score);
    
    scores[1].team2_Score = scores[1].team2_Score ? scores[1].team2_Score : 0;
    console.log(scores[1].team2_Score);
    


// let scores = [

// {
//     team1_Score: Number(prompt("Please enter Team 1 score")), 
// },

// {
//     team2_Score: Number(prompt("Please enter Team 2 score")),
// },

// ];

// scores[0].team1_Score = scores[0].team1_Score ? scores[0].team1_Score : 0;
// console.log(scores[0].team1_Score);

// scores[1].team2_Score = scores[1].team2_Score ? scores[1].team2_Score : 0;
// console.log(scores[1].team2_Score);





// Fulham 1 - 2 Arsenal
// Brentford 0 - 3 Manchester City
// Everton 1 - 1 Tottenham Hotspur
// Liverpool 2 - 0 Luton Town
// Nottingham Forest 1 - 1 Newcastle United
