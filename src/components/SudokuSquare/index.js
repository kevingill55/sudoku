import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

import { SudokuContext } from '../../context';

import { getSquareStyle } from './utils';

const SudokuSquare = ({ row, col, border }) => {
  const {
    board,
    activeRow,
    activeCol,
    activeValue,
    onSudokuKeyDown,
    onSquareSelection,
  } = useContext(SudokuContext);

  const [active, setActive] = useState(false);
  
  useEffect(() => {
    if (activeRow === row && activeCol === col) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [row, col, activeRow, activeCol]);

  const squareStyle = getSquareStyle(board, row, col, activeValue, activeRow, activeCol);

  return (
    <Box
      fill={true}
      justify='center'
      align='center'
      focusIndicator={false}
      style={squareStyle}
      background={ active ? (
        board[activeRow][activeCol].fixed ? 'light-5' : 'lavender'
      ) : 'none' }
      onClick={() => onSquareSelection(row, col)}
      hoverIndicator={{ color: 'light-5' }}
      border={ border ?  { side: 'right' } : false }
    >
      <input
        type='text'
        onKeyDown={ev => onSudokuKeyDown(ev.key)}
        onChange={() => {}}
        value={board[row][col]?.number}
        style={{
          border: 'none',
          boxSizing: 'border-box',
          background: 'transparent',
          outline: 'none',
          caretColor: 'transparent',
          cursor: 'pointer',
          fontSize: 'inherit',
          fontWeight: 'inherit',
          fontFamily: 'inherit',
          color: 'inherit',
          width: '100%',
          height: '100%',
          textAlign: 'center',
        }}
      />
    </Box>
  );
};

SudokuSquare.propTypes = {
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  border: PropTypes.bool.isRequired,
};

export default SudokuSquare;
