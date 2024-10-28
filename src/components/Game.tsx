import React, { useState, useEffect } from 'react';
import Board from './Board';
import { randomTetromino, TETROMINOS } from '../utils/tetrominos';
import { playSound } from '../utils/sounds';

const Game: React.FC = () => {
    const [board, setBoard] = useState(createInitialBoard());
    const [gameOver, setGameOver] = useState(false);

    const movePieceDown = () => {
        // Logic for moving the piece down
        playSound('land');  // Play landing sound when a piece lands
    };

    const handleClearLine = () => {
        // Logic for clearing a line
        playSound('clear');  // Play clear line sound
    };

    const handleGameOver = () => {
        setGameOver(true);
        playSound('gameOver');  // Play game over sound
    };

    useEffect(() => {
        if (gameOver) {
            stopGameMusic();
        }
    }, [gameOver]);

    const stopGameMusic = () => {
        playSound('themeBack');
    };

    return (
        <div>
            {gameOver ? (
                <div>
                    <h2>Game Over</h2>
                    <button onClick={() => window.location.reload()}>Play Again</button>  {/* Reload to restart */}
                </div>
            ) : (
                <Board board={board} />
            )}
        </div>
    );
};

const createInitialBoard = () => {
    const width = 10;
    const height = 20;
    return Array.from(Array(height), () => Array(width).fill(TETROMINOS[0].shape));
};

export default Game;
