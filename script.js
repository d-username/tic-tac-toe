let gameOver = false;
let currentPlayer = 'x';

const boxes = Array.from(document.querySelectorAll('.box'));

boxes.forEach((box, index) => {
  box.addEventListener('click', () => playGame(index));
});

function playGame(index) {
  updateBoard(index);
  updateCurrentPlayer();
  updateDisplayPlayer();
}

function updateBoard(index) {
  console.log(boxes[index].id);
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
  console.log(currentPlayer, 'here');
  const displayPlayer = document.getElementById('currentPlayer');
  displayPlayer.innerText = currentPlayer;
}
