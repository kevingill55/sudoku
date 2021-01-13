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
  const [squareStyle, setSquareStyle] = useState({ fontWeight: 'light' });
  
  useEffect(() => {
    getSquareStyle(board, row, col, activeValue, setSquareStyle);
    if (activeRow === row && activeCol === col) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [board, row, col, activeValue, activeRow, activeCol]);

  return (
    <Box
      fill={true}
      justify='center'
      align='center'
      focusIndicator={false}
      style={squareStyle}
      background={ active ? 'lavender' : 'none' }
      onClick={() => onSquareSelection(row, col)}
      hoverIndicator={{ color: 'lavender' }}
      border={ border ?  { side: 'right' } : false }
    >
      <input
        type='text'
        onKeyDown={ev => onSudokuKeyDown(ev.key)}
        onChange={() => {}}
        value={board[row][col]?.number}
        style={{
          border: 'none',
          outline: 'none',
          boxSizing: 'border-box',
          background: 'transparent',
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
