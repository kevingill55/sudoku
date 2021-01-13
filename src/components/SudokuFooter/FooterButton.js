import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

const FooterButton = ({ label, onClick }) => {
  return (
    <Box
      pad={{ vertical: 'xsmall', horizontal: 'small' }}
      onClick={onClick}
      hoverIndicator={{ color: 'light-3' }}
      background='lavender'
      align='center'
      justify='center'
      elevation='medium'
    >
      {label}
    </Box>
  );
};

FooterButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FooterButton;
