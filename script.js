let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget=()=>{
  return Math.floor(Math.random()*10);
}

const compareGuesses=(human,computer,secretTarget)=>{
  const humanDifference = Math.abs(secretTarget-human);
  const computerDifference = Math.abs(secretTarget-computer);
  if(humanDifference<=computerDifference){
    return true;
  }else{
    return false;
  }
}

const updateScore=winner=>{
  if(winner==='human'){
    humanScore++;
  }else if(winner === 'computer'){
    computerScore++;
  }
}

const advanceRound=()=>{
  currentRoundNumber++;
}

