import React, { useState } from 'react';




import PropTypes from 'prop-types';
import { Box, TextField, Button, Grid } from '@mui/material';



const LoanForm = ({ onCalculate, initialValues = {} }) => {
  const [loanAmount, setLoanAmount] = useState(initialValues.loanAmount || '');
  const [interestRate, setInterestRate] = useState(initialValues.interestRate || '');
  const [termYears, setTermYears] = useState(initialValues.termYears || '');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!loanAmount || isNaN(loanAmount) || parseFloat(loanAmount) <= 0) newErrors.loanAmount = 'Enter a valid amount';
    if (!interestRate || isNaN(interestRate) || parseFloat(interestRate) <= 0) newErrors.interestRate = 'Enter a valid rate';
    if (!termYears || isNaN(termYears) || parseInt(termYears, 10) <= 0) newErrors.termYears = 'Enter a valid term';
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Return true if form is valid
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      onCalculate(loanAmount, interestRate, termYears);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Loan Amount"
            type="number"
            fullWidth
            
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            error={!!errors.loanAmount}
            helperText={errors.loanAmount}
            inputProps={{ step: "1000" }} // Example step
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Interest Rate (%)"
            type="number"
            fullWidth
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            error={!!errors.interestRate}
            helperText={errors.interestRate}
            inputProps={{ step: "0.1" }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Term (Years)"
            type="number"
            fullWidth
            value={termYears}
            onChange={(e) => setTermYears(e.target.value)}
            error={!!errors.termYears}
            helperText={errors.termYears}
            inputProps={{ step: "1" }}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 3, mb: 2 }}
      >
        Calculate
      </Button>
    </Box>
  );
};

LoanForm.propTypes = {
  onCalculate: PropTypes.func.isRequired,
   initialValues: PropTypes.shape({
      loanAmount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      interestRate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      termYears: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
   })
};

export default LoanForm;