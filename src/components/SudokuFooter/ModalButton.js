import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from 'grommet';

const ModalButton = ({
  label,
  difficulty,
  currentDifficulty,
  setDifficulty,
}) => {
  const [active, setActive] = useState(false);
  
  useEffect(() => {
    currentDifficulty === difficulty ? setActive(true) : setActive(false);
  }, [difficulty, currentDifficulty]);

  return (
    <Box
      fill='horizontal'
      background={ active ? 'lavender' : 'none' }
      onClick={() => setDifficulty(difficulty)}
      hoverIndicator={{ color: 'light-5' }}
      align='center'
      justify='center'
      pad='small'
    >
      <Text size='small'>{label}</Text>
    </Box>
  );
};

ModalButton.propTypes = {
  label: PropTypes.string.isRequired,
  difficulty: PropTypes.number.isRequired,
  currentDifficulty: PropTypes.number.isRequired,
  setDifficulty: PropTypes.func.isRequired,
};

export default ModalButton;
