
function getComputerChoice(){
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random()*3)];
}

// for(let i = 0; i < 5; i++){
//     console.log(getComputerChoice());
// }