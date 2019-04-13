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
	
});
/*
var buttons = document.querySelectorAll('.player-move');
for(var i = 0; i < buttons.length; i++){
	buttons[i].addEventListener('click', function(){
		var getMove = this.buttons.getAttribute(data-move);
		playerMove(getMove);
	})
}
*/

rockBtn.addEventListener('click', function(){
	playerMove('rock');
});
paperBtn.addEventListener('click', function(){
	playerMove('paper');
});
scissorsBtn.addEventListener('click', function(){
	playerMove('scissor');
});

function computerMove(){
	var move = Math.round(Math.random() * 2) + 1;
	if (move == 1){
		return 'rock';
	}
	else if (move == 2){
		return 'paper';
	}
	else {
		return 'scissor';
	}
}

function playerMove(choice){
	var playerMove = choice;
	var compMove = computerMove();
	params.round ++;
	
	if (params.gameOver == false){
		if (playerMove =='rock' && compMove == 'rock') {
		outputWindow.innerHTML = "It's a tie! You played Rock and computer also played Rock.";
		params.winner = 'No one';
		}
		else if (playerMove == 'rock' && compMove == 'paper') {
			outputWindow.innerHTML = "You lose! Paper covers rock."
			params.computerScore = params.computerScore + 1;
			params.winner = 'Computer';
		}
		else if (playerMove == 'rock' && compMove == 'scissor') {
			outputWindow.innerHTML = "You won! Rock crushes scissors."
			params.playerScore = params.playerScore + 1;
			params.winner = 'Player';
		}
		else if (playerMove == 'paper' && compMove == 'rock') {
			outputWindow.innerHTML = 'You won! Paper covers rock'
			params.playerScore = params.playerScore + 1;
			params.winner = 'Player';
		}
		else if (playerMove == 'paper' && compMove == 'paper') {
			outputWindow.innerHTML = "It's a tie! You played Paper and computer also played Paper."
			params.winner = 'No one';
		}
		else if (playerMove == 'paper' && compMove == 'scissor') {
			outputWindow.innerHTML = 'You lose! Scissors cuts paper.'
			params.computerScore = params.computerScore + 1;
			params.winner = 'Computer';
		}
		else if (playerMove == 'scissor' && compMove == 'rock') {
			outputWindow.innerHTML = 'You lose! Rock crushes scissors.'
			params.computerScore = params.computerScore + 1;
			params.winner = 'Computer';
		}
		else if (playerMove == 'scissor' && compMove == 'paper') {
			outputWindow.innerHTML = 'You won! Scissors cuts paper.'
			params.playerScore = params.playerScore + 1;
			params.winner = 'Player';
		}
		else if (playerMove == 'scissor' && compMove == 'scissor') {
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
	console.log(playerMove);
	console.log(compMove);
	console.log(params.playerScore);
	console.log(params.computerScore);
	console.log(params.winner);

	pushParams();
	//console.log(params.progres);
}

function pushParams(){
	params.progres.push({
		round : params.round,
		player_move : playerMove,
		computer_move : compMove,
		result : params.playerScore + " : " + params.compScore,
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
			scoreModal.innerHTML = outputWindow.innerHTML + "<br>" + "End of game. You won! " + params.playerScore + ":" + params.computerScore;
		}
		else if (params.playerScore < params.computerScore){
			scoreModal.innerHTML = outputWindow.innerHTML + "<br>" + "End of game. You lose! " + params.playerScore + ":" + params.computerScore;
		}
		outputWindow.innerHTML = "   ";
}
}

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