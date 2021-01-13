import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import SudokuSquare from '../SudokuSquare';

import { calculateStarting } from './utils';

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

const SudokuBoardRow = ({ boxRow, border }) => {
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

SudokuBoardRow.propTypes = {
  boxRow: PropTypes.number.isRequired,
  boxCol: PropTypes.number.isRequired,
};

export default SudokuBoardRow;
