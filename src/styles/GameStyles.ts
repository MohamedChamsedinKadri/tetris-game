import styled from 'styled-components';

export const StyledBoard = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 30px);
    grid-template-rows: repeat(20, 30px);
    gap: 1px;
    background: #000;
`;

export const StyledCell = styled.div`
    width: 30px;
    height: 30px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid #333;
`;
