import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from 'grommet';

import { SudokuContext } from '../../context';

const SudokuKeyItem = ({ number }) => {
  const { sudokuKey } = useContext(SudokuContext);

  const [showNumber, setShowNumber] = useState(true);
  
  useEffect(() => {
    sudokuKey.includes(number) ? setShowNumber(true) : setShowNumber(false);
  }, [sudokuKey, number]);

  return (
    <Box
      width='27px'
      height='27px'
    >
      {
        showNumber && (
          <Box
            border={{ color: 'black' }}
            fill={true}
            round={true}
            background='lavender'
            align='center'
            justify='center'
          >
            <Text size='small' color='black'>{number}</Text>
          </Box>
        )
      }
    </Box>
  );
};

SudokuKeyItem.propTypes = {
  number: PropTypes.number.isRequired,
};

export default SudokuKeyItem;
