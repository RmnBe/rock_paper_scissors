'use strict';
var rockBtn = document.getElementById('rock-btn');
var paperBtn = document.getElementById('paperBtn');
var scissorsBtn = document.getElementById('scissorsBtn');
var outputWindow = document.getElementById('output');

rockBtn.addEventListener('click', function(){
	var compMove = function() {Math.round(Math.random() * 2) + 1}/*rock1,paper2,scissor3*/
	if (compMove = 1) {outputWindow.innerHTML = "It's a tie! You played Rock and computer also played Rock."}
	else if (compMove = 2) {outputWindow.innerHTML = "You lose! Paper covers rock."}
	else if (compMove = 3) {outputWindow.innerHTML = "You won! Rock crushes scissors."}
});
paperBtn.addEventListener('click', function(){
	var compMove = function() {Math.round(Math.random() * 2) + 1}/*rock1,paper2,scissor3*/
	if (compMove = 1) {outputWindow.innerHTML = "You won! Paper Paper covers rock."}
	else if (compMove = 2) {outputWindow.innerHTML = "It's a tie! You played Paper and computer also played Paper."}
	else if (compMove = 3) {outputWindow.innerHTML = "You lose! Scissors cuts paper."}
});
scissorsBtn.addEventListener('click', function(){
	var compMove = function() {Math.round(Math.random() * 2) + 1}/*rock1,paper2,scissor3*/
	if (compMove = 1) {outputWindow.innerHTML = "You lose! Rock crushes scissors."}
	else if (compMove = 2) {outputWindow.innerHTML = "You won! Scissors cuts paper."}
	else if (compMove = 3) {outputWindow.innerHTML = "It's a tie. You played scissors and computer also played scissors"}
});

/*function playerMove(){
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
