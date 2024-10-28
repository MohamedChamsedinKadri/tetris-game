import React from 'react';
import styled from 'styled-components';

// Styled component for an individual block of the tetromino
const StyledPiece = styled.div<{ color: string }>`
  width: auto;
  background: ${props => props.color};
  border: ${props => (props.color === '0' ? 'none' : '2px solid #333')};
  border-radius: 4px;
`;

// Props interface to define the shape of the props the component will receive
interface PieceProps {
    color: string; // color of the block
}

// Piece component that renders an individual block in the tetromino
const Piece: React.FC<PieceProps> = ({ color }) => (
    <StyledPiece color={color} />
);

export default Piece;
