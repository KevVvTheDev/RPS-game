var humanScore,computerScore; 
humanScore = computerScore = 0;

function getComputerChoice(){
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random()*3)];
}

function getHumanChoice(){
  let answer = prompt('Enter your choice: rock, paper or scissors');
    if(answer.toLowerCase() === 'rock' || answer.toLowerCase() === 'paper' || answer.toLowerCase() === 'scissors'){
        answer = answer.toLowerCase();
        return answer;
    }else{
        alert('Please enter rock, paper or scissors ONLY!');
        return getHumanChoice();
    }
}


function determine(humanChoice, computerChoice) {

    if(humanChoice === computerChoice){
        return 'Tie'; 
    }else if(humanChoice === 'rock' && computerChoice === 'scissors'){
        humanScore++;
        return 'You score a point! Rock beats Scissors';
    }else if(humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore++;
        return 'You score a point! Paper beats Rock';
    }else if(humanChoice === 'scissors' && computerChoice === 'paper'){
        humanScore++;
        return 'You score a point! Scissors beats Paper';
    }else if(humanChoice === 'rock' && computerChoice === 'paper'){
        computerScore++;
        return 'Computer score a point! Paper beats Rock';
    }else if(humanChoice === 'paper' && computerChoice === 'scissors'){
        computerScore++;
        return 'Computer score a point! Scissors beats Paper';
    }else if(humanChoice === 'scissors' && computerChoice === 'rock'){
        computerScore++;
        return 'Computer score a point! Rock beats Scissors';
    }else{
        alert('Please enter rock, paper or scissors ONLY!!');
        return determine();
    } 
  }

function playGame(){

    for(let i = 0; i < 5; i++){   
    console.log(determine(getHumanChoice(), getComputerChoice())); 
    }

    if(humanScore > computerScore){
        console.log("YOU WIN!!!");
    }
    else if(computerScore > humanScore){
        console.log("Computer WIN!!!");
    }else{
        console.log("TIE!!!");
    }
}




playGame();