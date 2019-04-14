'use strict';
var params = {
	round : 0,
	playerScore : 0,
	computerScore : 0,
	totalRounds : 0,
	gameOver : false,
	progres : [],
	winner : 'no one',
};

var playerChoice;
var computerChoice;
var rockBtn = document.getElementById('rock-btn');
var paperBtn = document.getElementById('paper-btn');
var scissorsBtn = document.getElementById('scissors-btn');
var newGameBtn = document.getElementById('newGame-btn');
var outputWindow = document.getElementById('output');
var resultWindow = document.getElementById('result');
var roundsWindow = document.getElementById('rounds');

newGameBtn.addEventListener('click', function(){
	params.totalRounds = window.prompt('Podaj ilość wygranych rund potrzebnych do zakończenia gry!');
	roundsWindow.innerHTML = params.totalRounds;
	outputWindow.innerHTML = "Let's play!";
	resultWindow.innerHTML = "0:0";
	params.computerScore = 0;
	params.playerScore = 0;
	params.round = 0;
	params.gameOver = false;
	params.progres = [];
	
});

var buttons = document.querySelectorAll('.player-move');
for(var i = 0; i < buttons.length; i++){
	buttons[i].addEventListener('click', function(){
		var getMove = this.getAttribute('data-move');
		playerMove(getMove);
	})
}

/*
rockBtn.addEventListener('click', function(){
	playerMove('rock');
});
paperBtn.addEventListener('click', function(){
	playerMove('paper');
});
scissorsBtn.addEventListener('click', function(){
	playerMove('scissor');
});
*/
function computerMove(){
	var move = Math.round(Math.random() * 2) + 1;
	if (move == 1){
		computerChoice = 'rock';
	}
	else if (move == 2){
		computerChoice = 'paper';
	}
	else {
		computerChoice = 'scissor';
	}
}

function playerMove(choice){
	playerChoice = choice;
	var compMove = computerMove();
	params.round ++;
	
	if (params.gameOver == false){
		if (playerChoice =='rock' && computerChoice == 'rock') {
		outputWindow.innerHTML = "It's a tie! You played Rock and computer also played Rock.";
		params.winner = 'No one';
		}
		else if (playerChoice == 'rock' && computerChoice == 'paper') {
			outputWindow.innerHTML = "You lose! Paper covers rock."
			params.computerScore = params.computerScore + 1;
			params.winner = 'Computer';
		}
		else if (playerChoice == 'rock' && computerChoice == 'scissor') {
			outputWindow.innerHTML = "You won! Rock crushes scissors."
			params.playerScore = params.playerScore + 1;
			params.winner = 'Player';
		}
		else if (playerChoice == 'paper' && computerChoice == 'rock') {
			outputWindow.innerHTML = 'You won! Paper covers rock'
			params.playerScore = params.playerScore + 1;
			params.winner = 'Player';
		}
		else if (playerChoice == 'paper' && computerChoice == 'paper') {
			outputWindow.innerHTML = "It's a tie! You played Paper and computer also played Paper."
			params.winner = 'No one';
		}
		else if (playerChoice == 'paper' && computerChoice == 'scissor') {
			outputWindow.innerHTML = 'You lose! Scissors cuts paper.'
			params.computerScore = params.computerScore + 1;
			params.winner = 'Computer';
		}
		else if (playerChoice == 'scissor' && computerChoice == 'rock') {
			outputWindow.innerHTML = 'You lose! Rock crushes scissors.'
			params.computerScore = params.computerScore + 1;
			params.winner = 'Computer';
		}
		else if (playerChoice == 'scissor' && computerChoice == 'paper') {
			outputWindow.innerHTML = 'You won! Scissors cuts paper.'
			params.playerScore = params.playerScore + 1;
			params.winner = 'Player';
		}
		else if (playerChoice == 'scissor' && computerChoice == 'scissor') {
			outputWindow.innerHTML = "It's a tie! You played Scissor and computer also played Scissor."
			params.winner = 'No one';
		}
	}
	else {
		outputWindow.innerHTML = 'End of game! Press "New Game" button!'; 
	}
	refreshResults();
	checkRounds();
	

	console.log(params.round);
	console.log(playerChoice);
	console.log(computerChoice);
	console.log(params.playerScore);
	console.log(params.computerScore);
	console.log(params.winner);

	pushParams();
	console.log(params.progres[params.round - 1]);
}

function pushParams(){
	params.progres.push({
		round : params.round,
		player_move : playerChoice,
		computer_move : computerChoice,
		result : params.playerScore + " : " + params.computerScore,
		last_winner : params.winner, 
	});
}
function refreshResults(){
	resultWindow.innerHTML = params.playerScore +":"+ params.computerScore;
}
function checkRounds(){
	if (params.totalRounds == params.playerScore || params.totalRounds == params.computerScore){
		params.gameOver = true;
		showModal();
		if (params.playerScore > params.computerScore){
			scoreModal.innerHTML = outputWindow.innerHTML + "<br>" + "End of game. You won! " + params.playerScore + ":" + params.computerScore + "<br>";
		}
		else if (params.playerScore < params.computerScore){
			scoreModal.innerHTML = outputWindow.innerHTML + "<br>" + "End of game. You lose! " + params.playerScore + ":" + params.computerScore + "<br>";
		}
		outputWindow.innerHTML = "   ";
		showTable();
}
}
function showTable(){
	scoreModal.innerHTML += '';
	for (var i = 0; i < params.progres.length; i++) {
    scoreModal.innerHTML +=
      '<tr><td>' +
      params.progres[i].round +
      '</td><td>' +
      params.progres[i].last_winner +
      '</td><td>' +
      params.progres[i].player_move+
      '</td><td>' +
      params.progres[i].computer_move+
      '</td><td>' +
      params.progres[i].round +
      '</td></tr>' +
      '<br>';
  }
}


/*
function showTable(){
	params.progres.forEach(function(){
	scoreModal.innerHTML = scoreModal.innerHTML + '<tr><td> ' + round + '</td><td> ' + player_move + '</td><td> ' + computer_move + '</td><td> ' + last_winner + '</td><td> ' + result + '</td></tr>' + '<br>'
	});
}
*/
var showModal = function(event){
		document.querySelector('#modal-overlay').classList.add('show');
};

var hideModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.remove('show');
};
	
var closeButtons = document.querySelectorAll('.modal .close');
	for(var i = 0; i < closeButtons.length; i++){
	closeButtons[i].addEventListener('click', hideModal);
}
	
document.querySelector('#modal-overlay').addEventListener('click', hideModal);
	
var modals = document.querySelectorAll('.modal');
	for(var i = 0; i < modals.length; i++){
		modals[i].addEventListener('click', function(event){
			event.stopPropagation();
		});
	}