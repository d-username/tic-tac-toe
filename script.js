let gameOver = false;
let currentPlayer = 'x';

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

function playGame(index) {
  updateBoard(index);
  validateGame(index);
  updateCurrentPlayer();
  updateDisplayPlayer();
}

function updateBoard(index) {
  const box = document.getElementById(boxes[index].id);
  box.innerText = currentPlayer;
}

function updateCurrentPlayer() {
  if (currentPlayer === 'x') {
    currentPlayer = 'o';
  } else if (currentPlayer === 'o') {
    currentPlayer = 'x';
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
    if (set[0] === set[1] && set[1] === set[2]) {
      console.log('winner is: ', currentPlayer);
      gameOver = true;
    }
  });
}

// DOCUMENTATION I USED
// Array.from() ---> //https://www.w3schools.com/jsref/jsref_from.asp
// fire click even only ONCE! ---> https://www.educative.io/answers/how-to-ensure-an-event-listener-is-only-fired-once-in-javascript
