import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Button, Layer } from 'grommet';

import ModalButton from './ModalButton';
import { SudokuContext } from '../../context';

const NewGameModal = ({ setNewGameModal }) => {
  const { onNewBoard } = useContext(SudokuContext);
  const [difficulty, setDifficulty] = useState(0);
  return (
    <Layer>
      <Box align='center'>
        <Box
          alignSelf='end'
          onClick={() => setNewGameModal(false)}
          round={true}
          hoverIndicator={{ color: 'lavedner' }}
          pad={{ horizontal: 'xsmall' }}
          focusIndicator={false}
        >
          <Text size='small'>x</Text>
        </Box>
        <Box pad={{ horizontal: 'large', vertical: 'small' }}>
          {
            ['Easy', 'Medium', 'Hard'].map((label, index) => (
              <ModalButton
                label={label}
                difficulty={index}
                currentDifficulty={difficulty}
                setDifficulty={setDifficulty}
              />
            ))
          }
          <Box
            direction='row'
            justify='center'
            gap='small'
            pad={{ top: 'medium' }}
          >
            <Button
              label='Go!'
              size='small'
              style={{ borderRadius: '0px' }}
              color='lavender'
              onClick={() => {
                setNewGameModal(false);
                onNewBoard(difficulty);
              }}
            />
          </Box>
        </Box>
      </Box>
    </Layer>
  );
};

NewGameModal.propTypes = {
  setNewGameModal: PropTypes.func.isRequired,
};

export default NewGameModal;
