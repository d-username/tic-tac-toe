let currentPlayer = 'X';
let gameOver = false;
let roundCound = 0;

let possibleWins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const boxes = Array.from(document.querySelectorAll('.box'));
boxes.forEach((box, index) => {
  box.addEventListener('click', () => playGame(index), { once: true });
});

const startButton = document.getElementById('start');
const gameBoard = document.getElementById('gameBoard');
const statusBar = document.getElementById('stats');
const result = document.getElementById('result');
const winner = document.getElementById('winner');
const restartButton = document.getElementById('restart');
const resultTie = document.getElementById('result-align');

startButton.addEventListener('click', () => {
  gameBoard.classList.replace('hide', 'gameBoard');
  statusBar.classList.replace('hide', 'stats');
  startButton.classList.replace('start', 'hide');
});

restartButton.addEventListener('click', () => {
  location.reload();
});

function playGame(index) {
  if (!gameOver) {
    updateBoard(index);
    validateGame(index);
    updateCurrentPlayer();
    updateDisplayPlayer();
    checkForTie();
  }
}

function updateBoard(index) {
  const box = document.getElementById(boxes[index].id);
  box.innerText = currentPlayer;
}

function updateCurrentPlayer() {
  if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else if (currentPlayer === 'O') {
    currentPlayer = 'X';
  }
}

function updateDisplayPlayer() {
  const displayPlayer = document.getElementById('currentPlayer');
  displayPlayer.innerText = currentPlayer;
}

function validateGame(index) {
  possibleWins = possibleWins.map((set) => updateSet(set));

  function updateSet(set) {
    for (let i = 0; i < set.length; i++) {
      if (set[i] === index) {
        set[i] = currentPlayer;
      }
    }
    return set;
  }

  possibleWins.forEach((set) => {
    console.log(set);
    if (set[0] === set[1] && set[1] === set[2]) {
      winner.innerText = currentPlayer;
      result.classList.replace('hide', 'result');
      gameOver = true;
    }
  });
}

function checkForTie() {
  roundCound++;
  if (roundCound === 9 && gameOver === false) {
    resultTie.innerText = 'congrats, both of you win';
    result.classList.replace('hide', 'result');
    gameOver = true;
  }
}

// DOCUMENTATION I USED
// Array.from() ---> //https://www.w3schools.com/jsref/jsref_from.asp
// fire click even only ONCE! ---> https://www.educative.io/answers/how-to-ensure-an-event-listener-is-only-fired-once-in-javascript
