'use strict';
var stoneBtn = document.getElementById('stone-btn');
var paperBtn = document.getElementById('paperBtn');
var scissorsBtn = document.getElementById('scissorsBtn');
var outputWindow = document.getElementById('output');

stoneBtn.addEventListener('click', playerMove());
paperBtn.addEventListener('click', playerMove());
scissorsBtn.addEventListener('click', playerMove());

var playerMove = function() {

};
var compMove = function() {
	Math.ceil(Math.random() * 2 + 1)
};
