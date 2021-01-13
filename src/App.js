import React from 'react';
import {
  Grommet,
  Box,
  Heading,
} from 'grommet';

import {
  SudokuBoard,
  SudokuKey,
  SudokuFooter,
} from './components';
import { SudokuProvider } from './context';
import { sudokuTheme } from './theme';

const App = () => {
  return (
    <Grommet full theme={sudokuTheme}>
      <Box align='center' pad='medium'>
        <Heading style={{ fontWeight: '400' }} size='small'>
          Sudoku
        </Heading>
        <SudokuProvider>
          <SudokuKey />
          <SudokuBoard />
          <SudokuFooter />
        </SudokuProvider>
      </Box>
    </Grommet>
  );
};

export default App;
