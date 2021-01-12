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
      width='32px'
      height='32px'
    >
      {
        showNumber && (
          <Box
            border={true}
            fill={true}
            round={true}
            align='center'
            justify='center'
          >
            <Text>{number}</Text>
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
