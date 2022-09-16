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

function standardiseInput(playerSelection) {
    ////Convert playerSelection to new playerSelection with capitalised first character followed by lowercase characters
    //Example: "rock" turns to "Rock"
    return playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1).toLowerCase();
}
function playRound(playerSelection, computerSelection) {
    //playerSelection as parameter for user input string(either "rock", "paper" or "scissors" which are case-insensitive) 
    //computerSelection as parameter for getComputerChoice()

    //Convert playerSelection to new playerSelection with capitalised first character followed by lowercase characters
    //Example: "rock" turns to "Rock"
    playerSelection = standardiseInput(playerSelection);
    //if playerSelection is not "Rock", "Paper" or "Scissors", return undefined 
    if (playerSelection !== "Rock" && playerSelection !== "Paper" && playerSelection !== "Scissors") {
        return undefined;
    }
    switch (true) {
        //if playerSelection = "rock" and computerSelection = "scissors",
        case (playerSelection === "Rock" && computerSelection === "Scissors"):
        //or playerSelection = "paper" and computerSelection = "rock",
        case (playerSelection === "Paper" && computerSelection === "Rock"):
        //or playerSelection = "scissors" and computerSelection = "paper",
        case (playerSelection === "Scissors" && computerSelection === "Paper"):
            //then return true 
            return true;

        //if playerSelection same as computerSelection, 
        //return undefined
        case (playerSelection === computerSelection):
            return undefined;
        default: 
            //else return false
            return false;
    }
    
    
    
    
}

//`You win! ${playerSelection} beats ${computerSelection}`
//`No change in score!`
//`You lose! ${computerSelection} beats ${playerSelection}`
function game() {
    //create variable playerScore and initialise it to 0
    let playerScore = 0;
    //create variable computerScore and initialise it to 0
    let computerScore = 0;
    
    //get 'rock' button and add event listener to call playRound function when clicked
    //with first parameter as "rock" and second parameter as getComputerChoice()
    const rockButton = document.querySelector(".rock");
    rockButton.addEventListener("click", () => playRound("Rock"));
    //get 'paper' button and add event listener to call playRound function when clicked
    //with first parameter as "paper" and second parameter as getComputerChoice()
    const paperButton = document.querySelector(".paper");
    paperButton.addEventListener("click", () => playRound("Paper"));
    //get 'scissors' button and add event listener to call playRound function when clicked
    //with first parameter as "scissors" and second parameter as getComputerChoice()
    const scissorsButton = document.querySelector(".scissors");
    scissorsButton.addEventListener("click", () => playRound("Scissors"));
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
    
    //outside the loop, if playerScore > computerScore, print player win in console
    if (playerScore > computerScore) {
        console.log(`You win! The final score is ${playerScore}:${computerScore}`);
    //else if computerScore > playerScore, print computer win in console
    } else if (computerScore > playerScore) {
        console.log(`You lose! The final score is ${computerScore}:${playerScore}`);
    //else print tie in console
    } else {
        console.log(`It is a tie! The final score is ${playerScore}:${computerScore}`);
    }
    
    
    
    
    
    
    
}

game();