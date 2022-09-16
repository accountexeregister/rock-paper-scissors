function getComputerChoice() {
    //Create variable probablity to store randomly generated number 
    //ranging from 0(inclusive) to 100(exclusive)
    let probability = Math.random() * 100;
    //if (probability >= 66.7) return 'Rock'
    if (probability >= 66.7) {
        return "Rock";
    //if (33.3 <= probability < 66.7) return 'Paper'
    } else if (probability < 66.7 && probability >= 33.3) {
        return "Paper";
    //else return 'Scissors'
    } else {
        return "Scissors";
    }
}

//Obsolete
function standardiseInput(playerSelection) {
    ////Convert playerSelection to new playerSelection with capitalised first character followed by lowercase characters
    //Example: "rock" turns to "Rock"
    return playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    //playerSelection as parameter for user input string(either "rock", "paper" or "scissors" which are case-insensitive) 
    //computerSelection as parameter for getComputerChoice()


    //reset '.results' div to be empty
    document.querySelector(".results").textContent = "";
    //Convert playerSelection to new playerSelection with capitalised first character followed by lowercase characters
    //Example: "rock" turns to "Rock"
    
    /* This assignment is obsolete as prompt is replaced with ui
    playerSelection = standardiseInput(playerSelection);
    */

    /*This if block is obsolete as prompt is replaced with ui
    //if playerSelection is not "Rock", "Paper" or "Scissors", return undefined 
    if (playerSelection !== "Rock" && playerSelection !== "Paper" && playerSelection !== "Scissors") {
        return undefined;
    }
    */

    //create variable computerScoreDiv to store computerScore div
    let computerScoreDiv = document.querySelector(".computer-score");
    //create variable playerScoreDiv to store playerScore div
    let playerScoreDiv = document.querySelector(".player-score");
    switch (true) {
        //if playerSelection = "rock" and computerSelection = "scissors",
        case (playerSelection === "Rock" && computerSelection === "Scissors"):
        //or playerSelection = "paper" and computerSelection = "rock",
        case (playerSelection === "Paper" && computerSelection === "Rock"):
        //or playerSelection = "scissors" and computerSelection = "paper",
        case (playerSelection === "Scissors" && computerSelection === "Paper"):
            //then increase player score in '.player-score' div and update '.results' div with text "You win!"
            let previousPlayerScore = playerScoreDiv.textContent.charAt(playerScoreDiv.textContent.length - 1);
            playerScoreDiv.textContent = playerScoreDiv.textContent.slice(0, playerScoreDiv.textContent.length - 1) + (+previousPlayerScore + 1);
            document.querySelector(".results").textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
            break;
        //if playerSelection same as computerSelection, 
        //then update '.results' div with text "No change in score."
        case (playerSelection === computerSelection):
            document.querySelector(".results").textContent = "No change in score.";
            break;
        default: 
            //else increase computer score in '.computer-score' div and update '.results' div with text "You lose!"
            let previousComputerScore = computerScoreDiv.textContent.charAt(computerScoreDiv.textContent.length - 1);
            computerScoreDiv.textContent = computerScoreDiv.textContent.slice(0, computerScoreDiv.textContent.length - 1) + (+previousComputerScore + 1);
            document.querySelector(".results").textContent = `You lose! ${playerSelection} loses to ${computerSelection}`;
    }
    
    //check if game is over
    gameOver(playerScoreDiv.textContent.charAt(playerScoreDiv.textContent.length - 1), 
             computerScoreDiv.textContent.charAt(computerScoreDiv.textContent.length - 1));
    
    
}

function gameOver(playerScore, computerScore) {
    //if playerScore < 5 and computerScore < 5, exit function
    if (playerScore < 5 && computerScore < 5) return;

    //create variable results to store '.results' div
    let results = document.querySelector(".results");
    //if playerScore > computerScore, insert player win text in '.results' div
    if (playerScore > computerScore) {
        results.textContent = `You win! The final score is ${playerScore}(player):${computerScore}(computer)`;
    //else if computerScore > playerScore, insert computer win text in '.results' div
    } else if (computerScore > playerScore) {
        results.textContent = `You lose! The final score is ${computerScore}(computer):${playerScore}(player)`;
    } 
    
    //reset all textboxes
    const playerScoreButton = document.querySelector(".player-score");
    const computerScoreButton = document.querySelector(".computer-score");
    playerScoreButton.textContent = "Player score: 0";
    computerScoreButton.textContent = "Computer score: 0";
}

function game() {

    /*This assignments are obsolte as prompt is replaced with ui
    //create variable playerScore and initialise it to 0
    let playerScore = 0;
    //create variable computerScore and initialise it to 0
    let computerScore = 0;
    */
    
    //get 'rock' button and add event listener to call playRound function when clicked
    //with first parameter as "rock" and second parameter as getComputerChoice()
    const rockButton = document.querySelector(".rock");
    rockButton.addEventListener("click", () => playRound("Rock", getComputerChoice()));
    //get 'paper' button and add event listener to call playRound function when clicked
    //with first parameter as "paper" and second parameter as getComputerChoice()
    const paperButton = document.querySelector(".paper");
    paperButton.addEventListener("click", () => playRound("Paper", getComputerChoice()));
    //get 'scissors' button and add event listener to call playRound function when clicked
    //with first parameter as "scissors" and second parameter as getComputerChoice()
    const scissorsButton = document.querySelector(".scissors");
    scissorsButton.addEventListener("click", () => playRound("Scissors", getComputerChoice()));

    //create results variable to store '.results' div element
    const results = document.querySelector(".results");

    /*Removed the while loop
    //create loop when playerScore and computerScore are < 5
    while (playerScore < 5 && computerScore < 5) {
        //if text in '.results' div states that player wins the round,
        //increment playerScore by 1
        if (results.textContent.slice(0, 7) === `You win`) {
            playerScore++;
        
        //else if text in '.results' div states that computer wins the round,
        //increment computerScore by 1
        } else if (results.textContent.slice(0, 8) === `You lose`) {
            computerScore++;
        }
        results.textContent = `${results.textContent}\nScore is now 
                                ${playerScore}(player):${computerScore}(computer)`;
    }
    /* Removed the logic of playing exactly five rounds
    //loop 5 times 
    for (let i = 0; i < 5; i++) {
        //in the loop, prompt user to enter input and store it in new variable playerInput
        let playerInput = prompt("Enter your input");

        //store getComputerChoice() in computerChoice variable
        let computerChoice = getComputerChoice();

        //in the loop, call playRound function with playerInput as argument for first parameter
        //and getComputerChoice() as argument for second parameter
        //and store the result in variable result
        let result = playRound(playerInput, computerChoice);
       
        //if result is undefined, print "no change in score"
        if (result === undefined) {
            console.log("No change in score");
        //if result is true, increment playerScore by 1 and print player win in console
        } else if (result) {
            playerScore++;
            console.log(`You win! ${standardiseInput(playerInput)} beats ${computerChoice}`);
        }
        //else increment computerScore by 1 and print computer win in console
        else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${standardiseInput(playerInput)}`);
        }

    }
    */
    
    
    
    
    
    
   
}

game();

