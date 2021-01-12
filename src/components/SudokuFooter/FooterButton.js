import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from 'grommet';

const FooterButton = ({ label, onClick }) => {
  return (
    <Box
      pad={{ vertical: 'xsmall', horizontal: 'small' }}
      round='small'
      onClick={onClick}
      hoverIndicator={{ color: 'lavender' }}
      background='light-2'
      align='center'
      justify='center'
      elevation='medium'
    >
      <Text>{label}</Text>
    </Box>
  );
};

FooterButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FooterButton;
