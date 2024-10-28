import React from 'react';
import { StyledBoard } from '../styles/GameStyles';

interface BoardProps {
    board: string[][];
}

const Board: React.FC<BoardProps> = ({ board }) => (
    <StyledBoard>
        {board.map((row, y) => row.map((cell, x) => <div key={x} className={`cell ${cell}`}></div>))}
    </StyledBoard>
);

export default Board;
