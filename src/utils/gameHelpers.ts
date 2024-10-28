import { TETROMINOS } from './tetrominos';

// Check if a piece will collide with other pieces or the edges of the board
export const checkCollision = (
    player: any,
    board: any[][],
    { x: moveX, y: moveY }: { x: number; y: number }
) => {
    for (let y = 0; y < player.tetromino.length; y += 1) {
        for (let x = 0; x < player.tetromino[y].length; x += 1) {
            // Check if we're on a tetromino cell
            if (player.tetromino[y][x] !== 0) {
                if (
                    // Check if move is inside the game area's height (y)
                    !board[y + player.pos.y + moveY] ||
                    // Check if move is inside the game area's width (x)
                    !board[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
                    // Check if cell is not clear (collides with something else)
                    board[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
                ) {
                    return true;
                }
            }
        }
    }
    return false;
};

// Create a new game board
export const createBoard = () => {
    const width = 10;
    const height = 20;

    return Array.from(Array(height), () =>
        Array(width).fill([0, 'clear'])
    );
};

// Clear the full rows and return the new board and the number of rows cleared
export const sweepRows = (board: any[][]) => {
    const rowsToSweep = board.reduce((acc: any[][], row: any[]) => {
        // Check if every cell in the row is filled (not 'clear')
        if (row.every(cell => cell[0] !== 0)) {
            acc.unshift(new Array(row.length).fill([0, 'clear'])); // Add a new empty row on top
            return acc;
        }
        acc.push(row);
        return acc;
    }, []);

    const rowsCleared = board.length - rowsToSweep.length;  // Number of cleared rows
    return { newBoard: rowsToSweep, rowsCleared };
};

// Rotate the tetromino to the right
export const rotateTetromino = (tetromino: any[][], direction: number) => {
    // Transpose rows to columns
    const rotatedTetromino = tetromino.map((_, index) =>
        tetromino.map(col => col[index])
    );

    // Reverse the rows for right (clockwise) rotation
    if (direction > 0) return rotatedTetromino.map(row => row.reverse());

    // Reverse the columns for left (counterclockwise) rotation
    return rotatedTetromino.reverse();
};
