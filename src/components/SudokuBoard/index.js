import React from 'react';
import { Box } from 'grommet';
import SudokuBoardRow from './SudokuBoardRow';

const SudokuBoard = () => {
  return (
    <Box
      width='large'
      height='large'
      justify='between'
      border={{ color: 'black', size: '4px' }}
    >
      <SudokuBoardRow boxRow={1} border={true} />
      <SudokuBoardRow boxRow={2} border={true} />
      <SudokuBoardRow boxRow={3} border={false} />
    </Box>
  );
};

export default SudokuBoard;
