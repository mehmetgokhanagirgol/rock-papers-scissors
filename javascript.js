var cscore = 0;
var pscore = 0;
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
                pscore++;
                return "Player wins! Paper beats rock"
            }
            else{
                cscore++;
                return "Computer wins! Scissors beats paper"
            }
        }
        else if(playerSelection == "scissors"){
            if(computerSelection == "paper"){
                pscore++;
                return "Player wins! Scissors beats paper"
            }
            else{
                cscore++;
                return "Computer wins! Rock beats scissors"
            }
        }
        else{
            if(computerSelection == "scissors"){
                pscore++;
                return "Player wins! Rock beats scissors"
            }
            else{
                cscore++;
                return "Computer wins! Paper beats rock"
            }
        }
    }
}
function buttonPlay(pstr){
    let str = computerPlay();
    console.log(playRound(pstr, str));
    result.innerText = pscore + " - " + cscore;
    if(pscore == 5){
        pscore = 0;
        cscore = 0;
        result.innerText = "Player wins the match !";
    }
    else if(cscore == 5){
        pscore = 0;
        cscore = 0;
        result.innerText = "Computer wins the match !";
    }
}

const buttons = document.querySelectorAll('button');
const result = document.getElementById('result');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttonPlay(button.id);
    });
});

