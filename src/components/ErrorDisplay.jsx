import React from 'react';



import PropTypes from 'prop-types';

import { Alert, AlertTitle } from '@mui/material';

const ErrorDisplay = ({ message, title = "Error" }) => {
  if (!message) return null;

  return (
    <Alert severity="error" sx={{ mt: 2, mb: 2 }}>
      <AlertTitle>{title}</AlertTitle>
      {message}
    </Alert>
  );
};

ErrorDisplay.propTypes = {
  message: PropTypes.string,
  title: PropTypes.string,
};

export default ErrorDisplay;