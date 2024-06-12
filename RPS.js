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
        return `0+Tie! ${humanChoice} ties with ${computerChoice}`;
    }

    // Rock conditions
    else if(!humanChoice.localeCompare("rock", undefined, { sensitivity: 'accent' }) && !computerChoice.localeCompare("paper", undefined, { sensitivity: 'accent' })){
        return `-1+You lose! ${computerChoice} beats ${humanChoice}`;
    }
    else if(!humanChoice.localeCompare("rock", undefined, { sensitivity: 'accent' }) && !computerChoice.localeCompare("scissors", undefined, { sensitivity: 'accent' })){
        return `1+You win! ${humanChoice} beats ${computerChoice}`;
    }

    // Paper conditions
    else if(!humanChoice.localeCompare("Paper", undefined, { sensitivity: 'accent' }) && !computerChoice.localeCompare("rock", undefined, { sensitivity: 'accent' })){
        return `1+You win! ${humanChoice} beats ${computerChoice}`
    }
    else if(!humanChoice.localeCompare("Paper", undefined, { sensitivity: 'accent' }) && !computerChoice.localeCompare("scissors", undefined, { sensitivity: 'accent' })){
        return `-1+You lose! ${computerChoice} beats ${humanChoice}`
    }
    // Scissors conditions
    else if(!humanChoice.localeCompare("Scissors", undefined, { sensitivity: 'accent' }) && !computerChoice.localeCompare("paper", undefined, { sensitivity: 'accent' })){
        return `1+You win! ${humanChoice} beats ${computerChoice}`
    }
    else if(!humanChoice.localeCompare("Scissors", undefined, { sensitivity: 'accent' }) && !computerChoice.localeCompare("rock", undefined, { sensitivity: 'accent' })){
        return `-1+You lose! ${computerChoice} beats ${humanChoice}`
    }
    else
        console.log("Error in playRound()");
    return "error";
}


let btn = document.querySelectorAll("button");
btn.forEach((button) => {
    button.addEventListener("mouseenter", () => {
        button.style.boxShadow = "#83E4F1 0px 5px 15px";
    });
    button.addEventListener("mouseleave", () => {
        button.style.boxShadow = "none";
    });
});

let result = document.querySelector(".result");
let score = document.createElement("h3");
let announcement = document.createElement("h3");
let points = [0,0];
result.appendChild(score);
result.appendChild(announcement);
let option = document.querySelector(".options");

option.addEventListener("click", (e) => {
    if(points[0] != 5 && points[1] != 5){
        let t = e.target;
        if(e.target == "[object HTMLButtonElement]"){
            let scoreResultSplit = playRound(t.id, getComputerChoice()).split("+");
            score.textContent = scoreResultSplit[1];
            if(scoreResultSplit[0] == 1)
                points[0]++;
            else if(scoreResultSplit[0] == -1)
                points[1]++;
            announcement.textContent = `You: ${points[0]} | Bot: ${points[1]}`;
        }
}
    if(points[0] == 5){
        score.textContent = "You win!"
        score.style.color = "green";
    }
    else if(points[1] == 5){
        score.textContent = "You lose!";
        score.style.color = "red";
        e.preventDefault;
    }
})