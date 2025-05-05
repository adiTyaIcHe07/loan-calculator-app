import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Grid, Select, MenuItem, FormControl, InputLabel, Button, CircularProgress, Alert } from '@mui/material';
import LoanForm from '../components/LoanForm';



import AmortizationTable from '../components/AmortizationTable';
import ErrorDisplay from '../components/ErrorDisplay'; 



import { useLoanCalculator } from '../hooks/useLoanCalculator';
import { useExchangeRates } from '../hooks/useExchangeRates';
import { useAppContext } from '../context/AppContext';

import { formatCurrency } from '../utils/formatters';

const HomePage = () => {
  const { baseCurrency, targetCurrency, setTargetCurrency } = useAppContext();
  const { emi, schedule, calculateLoan, error: calculationError } = useLoanCalculator();
  const { rates, loading: ratesLoading, error: ratesError, refetchRates } = useExchangeRates(baseCurrency); // Fetch rates based on USD

  const [convertedEmi, setConvertedEmi] = useState(null);
  const [loanInputs, setLoanInputs] = useState({ loanAmount: '', interestRate: '', termYears: '' }); // Store inputs

  
  useEffect(() => {
    if (emi !== null && rates && targetCurrency && rates[targetCurrency]) {
      setConvertedEmi(emi * rates[targetCurrency]);
    } else if (emi !== null && targetCurrency === baseCurrency) {
      setConvertedEmi(emi); 
    } else {
      setConvertedEmi(null); 
    }
  }, [emi, rates, targetCurrency, baseCurrency]);

  const handleCalculate = (amount, rate, term) => {
     setLoanInputs({ loanAmount: amount, interestRate: rate, termYears: term }); // Save inputs
     calculateLoan(amount, rate, term);
  };

  const handleCurrencyChange = (event) => {
    setTargetCurrency(event.target.value);
  };

  const handleReset = () => {
      // Reset loan calculation state
      calculateLoan(0, 0, 0); // Or create a dedicated reset function in the hook
      setLoanInputs({ loanAmount: '', interestRate: '', termYears: '' });
      setConvertedEmi(null);
      // Note: We don't reset the currency selection here, user might want to keep it
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Loan Calculator Dashboard
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <LoanForm onCalculate={handleCalculate} initialValues={loanInputs} />
        {calculationError && <ErrorDisplay message={calculationError} title="Calculation Error"/>}
      </Paper>

      {emi !== null && (
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6">Monthly EMI: {formatCurrency(emi, baseCurrency)}</Typography>

          <Grid container spacing={2} alignItems="center" sx={{ mt: 2 }}>
             <Grid item xs={12} sm={rates ? 6 : 12}>
                 {ratesLoading && <CircularProgress size={24} sx={{ mr: 1 }} />}
                 {ratesError && !ratesLoading && (
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                           <Alert severity="warning" sx={{ flexGrow: 1, mr: 1 }}>Could not load rates for conversion.</Alert>
                           <Button onClick={refetchRates} size="small">Retry</Button>
                      </Box>
                 )}
                 {rates && !ratesLoading && !ratesError && (
                     <FormControl fullWidth sx={{ minWidth: 150 }}>
                         <InputLabel id="currency-select-label">Convert EMI to</InputLabel>
                         <Select
                            labelId="currency-select-label"
                            id="currency-select"
                            value={targetCurrency}
                            label="Convert EMI to"
                            onChange={handleCurrencyChange}
                         >
                             {Object.keys(rates).sort().map((currencyCode) => (
                                 <MenuItem key={currencyCode} value={currencyCode}>
                                     {currencyCode}
                                 </MenuItem>
                             ))}
                         </Select>
                     </FormControl>
                 )}
              </Grid>
              <Grid item xs={12} sm={rates ? 6 : 0}>
                  {convertedEmi !== null && rates && (
                    <Typography variant="h6" sx={{ textAlign: { sm: 'right' } }}>
                        Converted EMI: {formatCurrency(convertedEmi, targetCurrency)}
                    </Typography>
                  )}
               </Grid>
          </Grid>

           <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                <Button variant="outlined" onClick={handleReset}>
                    Reset Table
                </Button>
           </Box>
        </Paper>
      )}

      {}
      {!calculationError && (
          <AmortizationTable schedule={schedule} currency={targetCurrency} />
      )}
    </Box>
  );
};

export default HomePage;