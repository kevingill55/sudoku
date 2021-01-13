import React from 'react';
import { Box } from 'grommet';

import SudokuKeyItem from './SudokuKeyItem';

const SudokuKey = () => {
  return (
    <Box
      direction='row'
      width='345px'
      justify='between'
      pad={{ bottom: 'small' }}
    >
      <SudokuKeyItem number={1} />
      <SudokuKeyItem number={2} />
      <SudokuKeyItem number={3} />
      <SudokuKeyItem number={4} />
      <SudokuKeyItem number={5} />
      <SudokuKeyItem number={6} />
      <SudokuKeyItem number={7} />
      <SudokuKeyItem number={8} />
      <SudokuKeyItem number={9} />
    </Box>
  );
};

export default SudokuKey;
