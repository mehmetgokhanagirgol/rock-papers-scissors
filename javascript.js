
function computerPlay(){
    let num = Math.floor(Math.random() * 3);
    
    if(num == 0){
        return "rock";
    }
    else if(num == 1){
        return "paper";
    }
    else{
        return "scissors"
    }

}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "It's a tie !";
    }
    else{
        if(playerSelection == "paper"){
            if(computerSelection == "rock"){
                return "Player wins! Paper beats rock"
            }
            else{
                return "Computer wins! Scissors beats paper"
            }
        }
        else if(playerSelection == "scissors"){
            if(computerSelection == "paper"){
                return "Player wins! Scissors beats paper"
            }
            else{
                return "Computer wins! Rock beats scissors"
            }
        }
        else{
            if(computerSelection == "scissors"){
                return "Player wins! Rock beats scissors"
            }
            else{
                return "Computer wins! Paper beats rock"
            }
        }
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));