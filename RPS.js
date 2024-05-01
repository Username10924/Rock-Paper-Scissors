function getComputerChoice(){
    let choice = "";
    let randomInt = Math.floor(Math.random() * 3);
    switch(randomInt){
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Scissors";
            break;
        case 2:
            choice = "Paper";
            break;
        default:
            choice = "Computational error in randomInt";
    }
    return choice;
}

function getHumanChoice(){
    let choice;
    do{
        choice = prompt("Pick rock, paper or scissors");
        if(choice.localeCompare("rock", undefined, { sensitivity: 'accent' } ) != 0 && choice.localeCompare("paper", undefined, { sensitivity: 'accent' } ) != 0 && choice.localeCompare("scissors", undefined, { sensitivity: 'accent' } ) != 0)
            console.log(`${choice} is not an option!\n`);
        else
            break;
    }while(true);
    return choice;
}

function playRound(humanChoice, computerChoice){
    // All tie conditions
    if(humanChoice.localeCompare(computerChoice, undefined, { sensitivity: 'accent' }) == 0){
        console.log(`Tie! ${humanChoice} ties with ${computerChoice}`);
        return 0;
    }

    // Rock conditions
    else if(!humanChoice.localeCompare("rock", undefined, { sensitivity: 'accent' }) && !computerChoice.localeCompare("paper", undefined, { sensitivity: 'accent' })){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return -1;
    }
    else if(!humanChoice.localeCompare("rock", undefined, { sensitivity: 'accent' }) && !computerChoice.localeCompare("scissors", undefined, { sensitivity: 'accent' })){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return 1;
    }

    // Paper conditions
    else if(!humanChoice.localeCompare("Paper", undefined, { sensitivity: 'accent' }) && !computerChoice.localeCompare("rock", undefined, { sensitivity: 'accent' })){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return 1;
    }
    else if(!humanChoice.localeCompare("Paper", undefined, { sensitivity: 'accent' }) && !computerChoice.localeCompare("scissors", undefined, { sensitivity: 'accent' })){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return -1;
    }
    // Scissors conditions
    else if(!humanChoice.localeCompare("Scissors", undefined, { sensitivity: 'accent' }) && !computerChoice.localeCompare("paper", undefined, { sensitivity: 'accent' })){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return 1;
    }
    else if(!humanChoice.localeCompare("Scissors", undefined, { sensitivity: 'accent' }) && !computerChoice.localeCompare("rock", undefined, { sensitivity: 'accent' })){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return -1;
    }
    else
        console.log("Error in playRound()");
    return 0;
}

function playGame(){
    console.log("Game started!")
    let humanScore = 0;
    let computerScore = 0;

    for(i = 0; i < 5; i++){
        switch(playRound(getHumanChoice(), getComputerChoice())){
            case 1:
                humanScore++;
                break;
            case -1:
                computerScore++;
                break;
            case 0:
            default:
                break;
        }
    }
    console.log(`Final results:\nYour score: ${humanScore}\nComputer score: ${computerScore}`);
}

playGame();