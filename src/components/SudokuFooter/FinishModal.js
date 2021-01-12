import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Layer, Text } from 'grommet';

const FinishModal = ({ setFinishModal }) => {
  return (
    <Layer>
      <Box
        gap='small'
        pad='medium'
        align='center'
      >
        <Text>Congrats! You completed the puzzle.</Text>
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
            size='small'
            onClick={() => setFinishModal(false)}
          />
          <Button
            label='Nah'
            color='lavender'
            size='small'
            onClick={() => setFinishModal(false)}
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
