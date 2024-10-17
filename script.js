const startForm = document.getElementById('start-form');
const startBtn = document.getElementById('start-btn');
const gameContainer = document.getElementById('game-container');
const hint = document.getElementById('hint');
const guessInput = document.getElementById('guess');
const guessBtn = document.getElementById('guess-btn');
const moves = document.getElementById('moves');

let startNum, endNum, secretNum, movesCount = 0;

// Start Game Handler
startBtn.addEventListener('click', () => {
  startNum = parseInt(document.getElementById('start').value);
  endNum = parseInt(document.getElementById('end').value);

  if (isNaN(startNum) || isNaN(endNum) || startNum >= endNum) {
    alert('Please enter valid start and end numbers.');
    return;
  }

  secretNum = Math.floor(Math.random() * (endNum - startNum + 1)) + startNum;
  movesCount = 0;
  moves.innerText = `Moves: ${movesCount}`;
  hint.innerText = 'Make a guess!';
  guessInput.value = '';

  gameContainer.style.display = 'flex';
  startForm.style.display = 'none';
});

// Guess Handler
guessBtn.addEventListener('click', () => {
  const guess = parseInt(guessInput.value);
  if (isNaN(guess)) {
    alert('Please enter a valid number.');
    return;
  }

  movesCount++;
  moves.innerText = `Moves: ${movesCount}`;

  if (guess === secretNum) {
    hint.innerText = '🎉 Congratulations! You guessed it!';
    guessBtn.disabled = true;
  } else if (guess < secretNum) {
    hint.innerText = '📈 Higher!';
  } else {
    hint.innerText = '📉 Lower!';
  }
});
