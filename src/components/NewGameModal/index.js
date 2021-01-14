import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Button, Layer } from 'grommet';
import { FormClose } from 'grommet-icons';

import ModalButton from './ModalButton';
import { SudokuContext } from '../../context';

const difficulties = ['Easy', 'Medium', 'Hard'];

const NewGameModal = ({ setNewGameModal }) => {
  const { onNewBoard } = useContext(SudokuContext);
  const [difficulty, setDifficulty] = useState(0);
  return (
    <Layer>
      <Box align='center'>
        <Button
          alignSelf='end'
          focusIndicator={false}
          icon={<FormClose color='black' />}
          onClick={() => setNewGameModal(false)}
          size='small'
        />
        <Box pad={{ horizontal: 'xlarge', vertical: 'medium' }}>
          {
            difficulties.map((label, index) => (
              <ModalButton
                key={label}
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
            pad={{ top: 'large' }}
          >
            <Box
              fill='horizontal'
              background='lavender'
              onClick={() => {
                setNewGameModal(false);
                onNewBoard(difficulty);
              }}
              hoverIndicator={{ color: 'light-5' }}
              align='center'
              justify='center;'
              pad={{ horizontal: 'medium', vertical: 'small' }}
            >
              <Text weight={600} size='large'>Go!</Text>
            </Box>
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
