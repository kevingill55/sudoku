import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from 'grommet';

const FooterButton = ({ label, onClick }) => {
  return (
    <Box
      width='small'
      pad={{ vertical: 'medium' }}
      onClick={onClick}
      hoverIndicator={{ color: 'light-3' }}
      background='lavender'
      align='center'
      justify='center'
      elevation='medium'
    >
      <Text weight={600} size='xlarge'>{label}</Text>
    </Box>
  );
};

FooterButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FooterButton;
