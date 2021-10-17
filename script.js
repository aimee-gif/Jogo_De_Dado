'use strict';

const player0E1 = document.querySelector(".player--0");
const player1E1 = document.querySelector(".player--1");
const score0E1 = document.querySelector("#score--0");
const score1E1 = document.querySelector("#score--1");
const currentScore0E1 = document.querySelector("#current--0");
const currentScore1E1 = document.querySelector("#current--1");

const newGameBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");

const btnsArr = document.querySelectorAll(".btn");

const dice = document.querySelector(".dice");

let scoresArr, activePlayer, playing, currentScore;

const resetGame = function () {
  scoresArr = [0 , 0];
  activePlayer = 0;
  playing = true;
  currentScore = 0;

  player0E1.classList.add("player--active");
  player1E1.classList.remove("player--active");
  player0E1.classList.remove("player--winner");
  player1E1.classList.remove("player--winner");

  score0E1.textContent = 0;
  score1E1.textContent = 0;
  currentScore0E1.textContent = 0;
  currentScore1E1.textContent = 0;
}

resetGame();

const switchPlayer = function () {
  player0E1.classList.toggle("player--active");
  player1E1.classList.toggle("player--active");
  currentScore = 0;
  document.querySelector (`#current--${activePlayer}`).textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0 ;
}

rollBtn.addEventListener("click",  function() {
  if(playing){
  const diceNum = Math.ceil(Math.random() * 6);
  dice.classList.remove("hidden");
  dice.src = `dice-${diceNum}.png`;

  if(diceNum !== 1) {
    currentScore += diceNum;
    document.querySelector (`#current--${activePlayer}`).textContent = currentScore;
  } else {
    switchPlayer();
  }
}
});


holdBtn.addEventListener("click", function() {
  if(playing){
  scoresArr[activePlayer] += currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent = scoresArr[activePlayer];
  if(scoresArr[activePlayer] >= 100) {
    document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
   playing = false;
  }else {
    switchPlayer();
  }
  }
});

newGameBtn.addEventListener("click", resetGame);