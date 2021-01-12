import React from 'react';
import { Box } from 'grommet';
import SudokuSquare from '../SudokuSquare';

const SudokuWrapper = () => {
  return (
    <Box
      width='400px'
      height='400px'
      justify='between'
      border={{ color: 'black', size: '4px' }}
    >
      <SudokuBoxRow boxRow={1} border={true} />
      <SudokuBoxRow boxRow={2} border={true} />
      <SudokuBoxRow boxRow={3} border={false} />
    </Box>
  );
};

const SudokuBoxRow = ({ boxRow, border }) => {
  return (
    <Box
      direction='row'
      justify='between'
      fill={true}
      border={ border ? { side: 'bottom', color: 'black', size: '3px'} : false }
    >
      <Box
        fill={true}
        border={{ side: 'right', color: 'black', size: '3px' }}
      >
        <SudokuBox boxRow={boxRow} boxCol={1} />
      </Box>
      <Box
        fill={true}
        border={{ side: 'right', color: 'black', size: '3px' }}
      >
        <SudokuBox boxRow={boxRow} boxCol={2} />
      </Box>
      <Box
        fill={true}
      >
        <SudokuBox boxRow={boxRow} boxCol={3} />
      </Box>
    </Box>
  );
};

const calculateStarting = (boxRow) => {
  if (boxRow === 1) {
    return 0;
  } else if (boxRow === 2) {
    return 3;
  } else {
    return 6;
  }
};

const SudokuBox = ({ boxRow, boxCol }) => {
  const startingRow = calculateStarting(boxRow);
  return (
    <Box
      justify='between'
      fill={true}
    >
      <SudokuRow col={boxCol} row={startingRow} border={true} />
      <SudokuRow col={boxCol} row={startingRow + 1} border={true} />
      <SudokuRow col={boxCol} row={startingRow + 2} border={false} />
    </Box>
  );
};

const SudokuRow = ({ col, row, border }) => {
  const startingCol = calculateStarting(col);
  return (
    <Box
      fill={true}
      justify='between'
      direction='row'
      border={ border ? { side: 'bottom' } : false}
    >
      <SudokuSquare col={startingCol} row={row} border={true} value='9' />
      <SudokuSquare col={startingCol + 1} row={row} border={true} value='8' />
      <SudokuSquare col={startingCol + 2} row={row} border={false} value='7' />
    </Box>
  );
};

export default SudokuWrapper;
