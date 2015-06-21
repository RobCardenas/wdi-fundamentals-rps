////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if ( playerMove === computerMove ) {
            winner = 'tie';
    } else if ( computerMove === "rock" && playerMove === "scissors" || computerMove === "scissors" && playerMove === "paper" || computerMove === "paper" && playerMove === "rock") {
            winner = 'computer';
    } else {
        winner = 'player';
    }
    return winner;
}


function playTo(x) {
  console.log('Let\'s play Rock Paper Scissors');
  var playerWins = 0;
  var computerWins = 0;
  // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
  while ( playerWins < x && computerWins < x ) {
    var human = getPlayerMove();
    var machine = getComputerMove();
    console.log(machine);
    var humanVsMachine = getWinner(human,machine);
    console.log(humanVsMachine);
      if (  humanVsMachine === "player" ) {
          playerWins++;
      } else if ( humanVsMachine === "computer" ) {
          computerWins++;
      }
    console.log("Your move was " + human + " and the machine chose " + machine + ".");
    console.log("The current score is: Human " + playerWins + " / Machine: " + computerWins + ".");
  }
  
      if ( playerWins === x ) {
          console.log("You win.");
      } else {
        console.log("Game Over. The Machine won!");
      }
    return [playerWins, computerWins];
} 


console.log(playTo(x)); //x can be any number.