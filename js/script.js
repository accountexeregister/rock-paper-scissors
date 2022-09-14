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

function playRound(playerSelection, computerSelection) {
    //playerSelection as parameter for user input string(either "rock", "paper" or "scissors" which are case-insensitive) 
    //computerSelection as parameter for getComputerChoice()

    //Convert playerSelection to new playerSelection with capitalised first character followed by lowercase characters
    //Example: "rock" turns to "Rock"
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1).toLowerCase();

    //if playerSelection is not "Rock", "Paper" or "Scissors", return "invalid player selection" 
    if (playerSelection !== "Rock" && playerSelection !== "Paper" && playerSelection !== "Scissors") {
        return "invalid player selection";
    }
    switch (true) {
        //if playerSelection = "rock" and computerSelection = "scissors",
        case (playerSelection === "Rock" && computerSelection === "Scissors"):
        //or playerSelection = "paper" and computerSelection = "rock",
        case (playerSelection === "Paper" && computerSelection === "Rock"):
        //or playerSelection = "scissors" and computerSelection = "paper",
        case (playerSelection === "Scissors" && computerSelection === "Paper"):
            //then return "You win! (playerSelection) beats (computerSelection)" 
            return `You win! ${playerSelection} beats ${computerSelection}`;

        //if playerSelection same as computerSelection, 
        //return "It is a tie! (playerSelection) does not beat (computerSelection)"
        case (playerSelection === computerSelection):
            return `It is a tie! ${playerSelection} does not beat ${computerSelection}`;
        default: 
            //else return "You lose! (computerSelection) beats (playerSelection)"
            return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    
    
    
    
}

console.log(playRound("roCk", getComputerChoice()));