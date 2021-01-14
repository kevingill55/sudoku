import React from 'react';
import {
  Grommet,
  Box,
  Text,
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
  const today = (new Date()).toLocaleDateString();
  return (
    <Grommet full theme={sudokuTheme}>
      <Box align='center' pad='medium'>
        <Box
          align='center'
          gap='xsmall'
          pad={{ vertical: 'large' }}
        >
          <Heading margin='none'>
            Sudoku
          </Heading>
          <Text size='large'>{today}</Text>
        </Box>
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
