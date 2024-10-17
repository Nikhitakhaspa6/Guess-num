const startForm = document.getElementById('start-form');
const startBtn = document.getElementById('start-btn');
const gameContainer = document.getElementById('game-container');
const hint = document.getElementById('hint');
const guessInput = document.getElementById('guess');
const guessBtn = document.getElementById('guess-btn');
const moves = document.getElementById('moves');

let startNum, endNum, secretNum, movesCount = 0;

startBtn.addEventListener('click', startGame);

function startGame() {
  startNum = parseInt(document.getElementById('start').value);
  endNum = parseInt(document.getElementById('end').value);
  secretNum = Math.floor(Math.random() * (endNum - startNum + 1)) + startNum;
  gameContainer.style.display = 'block';
  startForm.style.display = 'none';
}

guessBtn.addEventListener('click', checkGuess);

function checkGuess() {
  const guess = parseInt(guessInput.value);
  movesCount++;
  moves.innerText = `Moves: ${movesCount}`;
  if (guess === secretNum) {
    hint.innerText = ' Congratulations! You won!';
    guessBtn.disabled = true;
  } else if (guess < secretNum) {
    hint.innerText = 'Higher!';
  } else {
    hint.innerText = 'Lower!';
  }
  }
