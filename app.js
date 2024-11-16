// Game state
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

// Get elements
const boxes = document.querySelectorAll('.box');
const message = document.getElementById('Msg');
const resetButton = document.getElementById('reset-btn');
const newButton = document.getElementById('new-btn');

// Handle box clicks
boxes.forEach((box, index) => {
    box.addEventListener('click', () => handleBoxClick(box, index));
});

// Handle box click logic
function handleBoxClick(box, index) {
    if (box.innerText === '' && gameActive) {
        board[index] = currentPlayer;
        box.innerText = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Toggle player
    }
}

// Check for winner
function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            message.innerText = `${currentPlayer} Wins!`;
            return;
        }
    }

    // Check for draw
    if (!board.includes('')) {
        gameActive = false;
        message.innerText = "It's a Draw!";
    }
}

// Reset game
resetButton.addEventListener('click', () => {
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    boxes.forEach(box => box.innerText = '');
    message.innerText = '';
    currentPlayer = 'X'; // Starting player
});

// New Game button
newButton.addEventListener('click', () => {
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    boxes.forEach(box => box.innerText = '');
    message.innerText = '';
    currentPlayer = 'X'; // Reset to player X
});
