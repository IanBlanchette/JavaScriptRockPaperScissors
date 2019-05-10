const readline = require('readline');

var playerWin = 0;
var computerWin = 0;
var tie = 0;

let gameEnd = false; 


const rl = readline.createInterface
({
  input: process.stdin,
  output: process.stdout
});

function randomInt(max)
{
  return Math.floor(Math.random() * Math.floor(max + 1));
}

const question = questionText =>
  new Promise(resolve =>
  {
    rl.question(questionText, answer => resolve(answer));
  });

const valid = ['rock', 'paper', 'scissors'];
const gameOptions = ['yes', 'no'];

const playGame = async () => 
{
  let choice = null;
  let gameContinue = null; 
  while (!valid.includes(choice) && gameEnd == false)
  {
    choice = await question(`Please choose one of the following: Rock, Paper, Scissors
`);

    choice = choice.toLowerCase();
  }

  const opponent = valid[randomInt(2)];

  if (choice === opponent)
  {
    console.log('The game was a tie');
    tie ++; 
  } 
    else if ((choice === 'rock' && opponent === 'scissors') ||
            (choice === 'scissors' && opponent === 'paper')||
            (choice === 'paper' && opponent === 'rock'))
    {
      console.log("You win player");
      playerWin ++;
    }
    else
    {
    console.log("Player lost, computer is the winner");
    computerWin ++; 
    }
    console.log(`Player chose: ${choice} Computer chose: ${opponent}`);
    console.log(`
      `);
    gameContinue = await question("Do you want to play again? Yes or no?");
    gameContinue = gameContinue.toLowerCase();
    if (gameContinue === "yes")
    {
      playGame();
    }
    if (gameContinue === "no")
    {
      console.log(`Player wins: ${playerWin}
Computer wins: ${computerWin}
Ties: ${tie}`);
      gameEnd == true;

    }

  };
 
playGame();
