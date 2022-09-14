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

console.log(getComputerChoice());