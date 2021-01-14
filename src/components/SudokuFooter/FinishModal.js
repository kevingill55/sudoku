import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Layer, Text } from 'grommet';

const FinishModal = ({ setFinishModal, setNewGameModal }) => {
  return (
    <Layer>
      <Box
        gap='small'
        pad={{ horizontal: 'large', vertical: 'medium' }}
        align='center'
      >
        <Text>Well done 🤝</Text>
        <Text weight={600}>Play again?</Text>
        <Box
          direction='row'
          justify='center'
          gap='small'
          pad='small'
        >
          <Button
            primary
            label='Yes!'
            color='lavender'
            size='large'
            onClick={() => {
              setFinishModal(false);
              setNewGameModal(true);
            }}
          />
        </Box>
      </Box>
    </Layer>
  );
};

FinishModal.propTypes = {
  setFinishModal: PropTypes.func.isRequired,
};

export default FinishModal;
