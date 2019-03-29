'use strict';
var rockBtn = document.getElementById('rock-btn');
var paperBtn = document.getElementById('paper-btn');
var scissorsBtn = document.getElementById('scissors-btn');
var newGameBtn = document.getElementById('newGame-btn');
var outputWindow = document.getElementById('output');
var resultWindow = document.getElementById('result');
var roundsWindow = document.getElementById('rounds');

var playerScore = 0;
var computerScore = 0;
var totalRounds = 0;

newGameBtn.addEventListener('click', function(){
	totalRounds = window.prompt('Podaj ilość rund do rozegrania');
	roundsWindow.innerHTML = totalRounds;
	outputWindow.innerHTML = "Let's play!";
	resultWindow.innerHTML = "0:0";
	computerScore = 0;
	playerScore = 0;
	console.log(totalRounds);
});

rockBtn.addEventListener('click', function(){
	playerMove('rock');
	console.log(totalRounds);
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
	console.log(playerMove);
	console.log(compMove);

	if (totalRounds < 1) {
		outputWindow.innerHTML = "End of game!"; 
	}
	else if (totalRounds == 1 && playerScore == computerScore) {
		outputWindow.innerHTML = outputWindow.innerHTML + "<br>" + "End of game. It's a tie";
		totalRounds = totalRounds - 1;
	}
	else if (totalRounds == 1 && playerScore > computerScore) {
		outputWindow.innerHTML = outputWindow.innerHTML + "<br>" + " End of game. You won! " + playerScore + ":" + computerScore;
		totalRounds = totalRounds - 1;
	}
	else if (totalRounds == 1 && playerScore < computerScore) {
		outputWindow.innerHTML = outputWindow.innerHTML + "<br>" + " End of game. You lose! " + playerScore + ":" + computerScore;
		totalRounds = totalRounds - 1;
	}
	else if (playerMove =='rock' && compMove == 'rock') {
		outputWindow.innerHTML = "It's a tie! You played Rock and computer also played Rock.";
		totalRounds = totalRounds - 1;
	}
	else if (playerMove == 'rock' && compMove == 'paper') {
		outputWindow.innerHTML = "You lose! Paper covers rock."
		computerScore = computerScore + 1;
		totalRounds = totalRounds - 1;
	}
	else if (playerMove == 'rock' && compMove == 'scissor') {
		outputWindow.innerHTML = "You won! Rock crushes scissors."
		playerScore = playerScore + 1;
		totalRounds = totalRounds - 1;
	}
	else if (playerMove == 'paper' && compMove == 'rock') {
		outputWindow.innerHTML = 'You won! Paper covers rock'
		playerScore = playerScore + 1;
		totalRounds = totalRounds - 1;
	}
	else if (playerMove == 'paper' && compMove == 'paper') {
		outputWindow.innerHTML = "It's a tie! You played Paper and computer also played Paper."
		totalRounds = totalRounds - 1;
	}
	else if (playerMove == 'paper' && compMove == 'scissor') {
		outputWindow.innerHTML = 'You lose! Scissors cuts paper.'
		computerScore = computerScore + 1;
		totalRounds = totalRounds - 1;
	}
	else if (playerMove == 'scissor' && compMove == 'rock') {
		outputWindow.innerHTML = 'You lose! Rock crushes scissors.'
		computerScore = computerScore + 1;
		totalRounds = totalRounds - 1;
	}
	else if (playerMove == 'scissor' && compMove == 'paper') {
		outputWindow.innerHTML = 'You won! Scissors cuts paper.'
		playerScore = playerScore + 1;
		totalRounds = totalRounds - 1;
	}
	else if (playerMove == 'scissor' && compMove == 'scissor') {
		outputWindow.innerHTML = "It's a tie! You played Scissor and computer also played Scissor."
		totalRounds = totalRounds - 1;
	}
	refreshResults();
}
function refreshResults(){
	if (totalRounds > 0) {
		resultWindow.innerHTML = playerScore +":"+ computerScore;
	}
}






/*rockBtn.addEventListener('click', function(){
	var compMove = Math.round(Math.random() * 2) + 1;/*rock1,paper2,scissor3
	if (compMove == 1) {outputWindow.innerHTML = "It's a tie! You played Rock and computer also played Rock."}
	else if (compMove == 2) {outputWindow.innerHTML = "You lose! Paper covers rock."}
	else if (compMove == 3) {outputWindow.innerHTML = "You won! Rock crushes scissors."}
});
paperBtn.addEventListener('click', function(){
	var compMove = Math.round(Math.random() * 2) + 1;
	if (compMove == 1) {outputWindow.innerHTML = "You won! Paper Paper covers rock."}
	else if (compMove == 2) {outputWindow.innerHTML = "It's a tie! You played Paper and computer also played Paper."}
	else if (compMove == 3) {outputWindow.innerHTML = "You lose! Scissors cuts paper."}
});
scissorsBtn.addEventListener('click', function(){
	var compMove = Math.round(Math.random() * 2) + 1;
	if (compMove == 1) {outputWindow.innerHTML = "You lose! Rock crushes scissors."}
	else if (compMove == 2) {outputWindow.innerHTML = "You won! Scissors cuts paper."}
	else if (compMove == 3) {outputWindow.innerHTML = "It's a tie. You played scissors and computer also played scissors"}
});*/



/*
rockBtn.addEventListener('click', function(){
	playerMove('rock');
});
paperBtn.addEventListener('click', function(){
	playerMove('paper');
});
scissorsBtn.addEventListener('click', function(){
	playerMove('scissors');
});
function playerMove(){
	var compMove = function() {Math.round(Math.random() * 2) + 1}/*rock1,paper2,scissor3*/
/*	if (playerMove = rock || compMove = 1) {outputWindow.innerHTML = "It's a tie! You played Rock and computer also played Rock."}
	else if (playerMove = rock || compMove = 2) {outputWindow.innerHTML = "You lose! Paper covers rock."}
	else if (playerMove = rock || compMove = 3) {outputWindow.innerHTML = "You won! Rock crushes scissors."}
	else if (playerMove = paper || compMove = 1) {outputWindow.innerHTML = "You won! Paper Paper covers rock."}
	else if (playerMove = paper || compMove = 2) {outputWindow.innerHTML = "It's a tie! You played Paper and computer also played Paper."}
	else if (playerMove = paper || compMove = 3) {outputWindow.innerHTML = "You lose! Scissors cuts paper."}
	else if (playerMove = scissors || compMove = 1) {outputWindow.innerHTML = "You lose! Rock crushes scissors."}
	else if (playerMove = scissors || compMove = 2) {outputWindow.innerHTML = "You won! Scissors cuts paper."}
	else if (playerMove = scissors || compMove = 3) {outputWindow.innerHTML = "It's a tie. You played scissors and computer also played scissors"}
}*/
