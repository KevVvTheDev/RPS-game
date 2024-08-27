var humanScore,computerScore;
humanScore = computerScore = 0;

function getComputerChoice(){
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random()*3)];
}

// for(let i = 0; i < 5; i++){
//     console.log(getComputerChoice());
// }

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

getHumanChoice();