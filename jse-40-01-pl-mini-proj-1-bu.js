'use strict';

/*
Write a program that keeps scores from Premier League football matches.
The input must be only limited to teams currently in the premier league this current season of 2024/25
The user input must be received via prompt
Each input must follow the format of team1 score - score team2
E.g. Arsenal 1 - 2 Ipswich
Another e.g. Man City 0 - 7 Man United
Any popular version of the team names are acceptable such as Man City for Manchester City.
Once input is received, store the match results as individuals objects within a containing array.
Write functions to display the most recent match results and also all match results.
*/

//My lazy console.log() helper :)
let e = i => { console.log(i); }

//Function to control noisy console logs by making them conditional
let dbg = i => { (!(typeof _SHOW_DEBUG_LOGS_ === 'undefined') && (_SHOW_DEBUG_LOGS_)) ? e(i) : null; }

//Function to control noisy console logs
//@Deprecated - please use the arrow function dbg(i)
function dbgx(i){
  //e(`in dbg() | Type Of _SHOW_DEBUG_LOGS_: ${typeof _SHOW_DEBUG_LOGS_}`);
  if ( !(typeof _SHOW_DEBUG_LOGS_ === 'undefined') && (_SHOW_DEBUG_LOGS_) ){
    e(i);
  }
}

//My Spacer
function spacer(){
    e('-----');
}

function displayObjectFields(objName, objVar){
    e(`Displaying Object Fields for Object [${objName}]`);
    
    for(let objField in objVar){
        e(`- ${objField}: ${objVar[objField]}`);
    }
}

function displayMatchResult(objMatchResult, boolFullDisplay=false){
  if (boolFullDisplay){
    e(`Premier League Match Result for ${objMatchResult.teamA} vs ${objMatchResult.teamB}`);
    
    for(let objField in objMatchResult){
      e(`- ${objField}: ${objMatchResult[objField]}`);
    }
  } else {
    e(` - ${objMatchResult.rawResult}`);
  }
}

function quickCheckUserInputIsValid(strMatchResult){
  let boolIsValidUserInput = false;

  if (strMatchResult && (strMatchResult != 'null')){
    boolIsValidUserInput = ((strMatchResult.split('-')).length === 2);
  }
  
  dbg(`[INFO] In function quickCheckUserInputIsValid | Returning ${boolIsValidUserInput} [${typeof boolIsValidUserInput}] after checking user input`);
  return boolIsValidUserInput;
}

function extractOneTeamAndScore(strOneTeamResult, constTeam='A'){
    let objTeamAndScore = null;
    
    if (!strOneTeamResult){
        e(`Invalid Input to function extractOneTeamAndScore: ${strOneTeamResult}`);
    } else {
        dbg(`[INFO] In function extractOneTeamAndScore | Argument strOneTeamResult: [${strOneTeamResult} | Type: ${typeof strOneTeamResult}]`);
        //Split the one team result using SPACE
        let arrTeamAndScore = strOneTeamResult.split(' ');
        dbg(`[INFO] Before popping/shifting score for one team, split array of strOneTeamResult: ${arrTeamAndScore}`);
        
        //Get the score for the Team, depending on team A or B (left side or right side) use pop or shift
        let strTeamScore = (constTeam === 'A') ? (arrTeamAndScore.pop()).trim() : (arrTeamAndScore.shift()).trim()
        dbg(`[INFO] After popping/shifting score for one team | Score: [${strTeamScore}] | Remnant Array: ${arrTeamAndScore}`);
        
        //Check the score is a number
        if (isNaN(strTeamScore)){
            //Inform the user that the score is invalid
            e(`[ERROR]: Team Score [${strTeamScore}] is NOT Valid for ${strOneTeamResult}. Please review your input.`);
        } else {
            //Convert the String score to numeric score
            let numTeamScore = Number(strTeamScore);
            
            //Check the number is not negative -> Teams don't score negative goals!
            /*
            *Note: This check always succeeds because a negative will result in a hyphen split of three in
            *function quickCheckUserInputIsValid() which means we don't even get this far in the first place!
            */
            if (numTeamScore < 0){
                //Inform the user that the NGEATIVE score is invalid
                e(`[ERROR]: NEGATIVE Team Score [${strTeamScore}] is NOT Valid for ${strOneTeamResult}. Please review your input.`);
            } else {
                //Okay, now we are fully satisfied with the score, let's get the team name
                let strTeamName = arrTeamAndScore.join(' ');
                dbg(`[INFO] We now have the Team's Name [${strTeamName}] and Team's Score [${numTeamScore}]. Let's make an object to return.`);
                
                //Create Team and Score Object to Return
                objTeamAndScore = {
                    teamName    :   strTeamName,
                    teamScore   :   numTeamScore
                }
            }
        }
    }
    
    return objTeamAndScore;
}

function extractResultScores(strMatchResult){
    let extractedScores = null;
    
    if (strMatchResult){
        let arrSplitResults = strMatchResult.split('-');
        dbg(`[INFO] In function extractResultScores | Results Split by Hypens: ${arrSplitResults}`);
        
        //Try obtain results for each team
        const TeamA = 'A';
        const TeamB = 'B';
        
        const strTeamAResult = (arrSplitResults[0]).trim();
        const strTeamBResult = (arrSplitResults[1]).trim();
        
        let objTeamAScore = extractOneTeamAndScore(strTeamAResult, TeamA);
        let objTeamBScore = extractOneTeamAndScore(strTeamBResult, TeamB);
        
        if ((objTeamAScore == null) || (objTeamBScore == null)){
            e(`[ERROR]: Team Scores could not be extracted. Please review your input. Team A: ${objTeamAScore} | Team B: ${objTeamBScore}`);
        } else {
            extractedScores = {
                teamA       :   objTeamAScore.teamName,
                teamAScore  :   objTeamAScore.teamScore,
                teamB       :   objTeamBScore.teamName,
                teamBScore  :   objTeamBScore.teamScore,
                rawResult   :   strMatchResult
            }
        }
        
    }
    
    return extractedScores;
}

function getMatchResultInput(){
    const constSampleResultInput = 'Fulham 1 - 2 Arsenal';
    return String(prompt(`Enter Premier League Match Result (format: ${constSampleResultInput}):`, constSampleResultInput));
}

function getUserActionChoice(){
  let userChoice = null;
  let isValidAction = false;
  
  while (true){
    userChoice = prompt(`Please enter the action to perform \n${getListOfActionsOptions()}`, '3');
    if (userChoice == null) { break; } //break from while loop
    
    userChoice = userChoice.trim();
    
    switch (userChoice) {
      case '1':
      case '2':
      case '3':
      case '4':
      case 'Q':
      case 'q': {
        isValidAction = true;
        dbg(`Returning valid user input received - [${userChoice}]....`);
        spacer();
        break;
      }
      default: {
        isValidAction = false;
        dbg(`INVALID user input received - [${userChoice}]`);
      }
    }
    
    if (isValidAction) { break; } //break from while loop
  }
  
  return userChoice;
}

function getListOfActionsOptions(){
    let strActionsOptions = 
        'Actions List: ' +
        '\n 1: display all match results' +
        '\n 2: display the most recent match result' +
        '\n 3: Add a match result' +
        '\n 4: Update an existing match result' +
        '\n Q: exit the program'
    ;
    return strActionsOptions;
}

function matchResultsDatabaseIsEmpty(){
  return (arrPLMatchResultsDB.length === 0);
}

function notifyUserOfEmptyMatchResultsDatabase(){
  e('The Premier League Match Results Database is currently Empty. Please add some match results first.');
}

function displayAllMatchResults(){
  if (matchResultsDatabaseIsEmpty()) {
    notifyUserOfEmptyMatchResultsDatabase();
  } else {
    e(`Displaying all Premier League Match Results [Total: ${arrPLMatchResultsDB.length}]...`);

    for (let objMatchResult of arrPLMatchResultsDB){
      displayMatchResult(objMatchResult);
    }
  }
}

function displayMostRecentMatchResult(){
  if (matchResultsDatabaseIsEmpty()) {
    notifyUserOfEmptyMatchResultsDatabase();
  }
  else {
    e('Displaying the Most Recent Premier League Match Result');
    let objMatchResult = arrPLMatchResultsDB[arrPLMatchResultsDB.length - 1];
    displayMatchResult(objMatchResult, true);
  }
}

function addMatchResult(){
  let strResult = getMatchResultInput(); //Prompt for User input. Returns String
  
  if (!quickCheckUserInputIsValid(strResult)) {
      //Step 1: We have an INVALID entry from the user
      e(`[USER INPUT ERROR] Invalid Result entered: ${strResult}`);
  } else {
      //Step 1: We have a possible valid entry from the user
      //Step 2: Try extracting the scores (numbers)
      let objMatchResult = extractResultScores(strResult);
  
      //Step 3: Display object Match Result with extracted scores and team names
      //displayObjectFields('User Inputted Match Result', objMatchResult);

      //Step 4: Add Match Result Object to the Global Database
      arrPLMatchResultsDB.push(objMatchResult);
  }

  //TODO Return Something???
}


//Main Program Begins Here
//=========================//

//Global Variables and Constants
const _SHOW_DEBUG_LOGS_ = false; //Const used to reduce the noise of info logs. Set to true to see more logs!

let arrPLMatchResultsDB = []; //Database of Premier League Results [Type: Array]

const PLTeams = [
    "Arsenal", "Aston Villa", "Bournemouth", "Brentford",
    "Brighton & Hove Albion", "Burnley", "Chelsea", "Crystal Palace",
    "Everton", "Fulham", "Liverpool", "Luton Town", "Manchester City", 
    "Manchester United", "Newcastle United", "Nottingham Forest", 
    "Sheffield United", "Tottenham Hotspur", "West Ham United", 
    "Wolverhampton Wanderers"
];

//Main Runer Function that Loops Run until User Quits Program
function fxnMainRunner(){
  e('==Main Runner Function==');
  spacer();

  //Loop until user quits
  let uac = null;
  let uacIsQuit = false;
  
  while (true){
    uac = getUserActionChoice();
    
    switch (uac) {
      case '1': {
        displayAllMatchResults(arrPLMatchResultsDB);
        spacer();
        break;
      }
      case '2': {
        displayMostRecentMatchResult();
        spacer();
        break;
      }
      case '3': {
        e(`Adding a Match Result...`);
        addMatchResult();
        e(`Total Records in Match Result Database: ${arrPLMatchResultsDB.length}`);
        spacer();
        break;
      }
      case '4': {
        e('Case 4 TBC');
        spacer();
        break;
      }
      case 'Q':
      case 'q': {
        uacIsQuit = true;
        e(`Terminating Program at user request - [${uac}]....`);
        break;
      }
      default: {
        uacIsQuit = false;
        e(`INVALID user input received - [${uac}]`);
        spacer();
      }
    }
    
    if (uacIsQuit) { break; } //break from while loop;
  }
  
  e('End of Program. Thank you for using this JavaScript Premier League Football Results Tracker Database');
}

//Run Main Function
fxnMainRunner();


//Sample Inputs
// Fulham 1 - 2 Arsenal
// Brentford 0 - 3 Manchester City
// Everton 1 - 1 Tottenham Hotspur
// Liverpool 2 - 0 Luton Town
// Nottingham Forest 1 - 1 Newcastle United
//https://edube.org/sandbox?language=js