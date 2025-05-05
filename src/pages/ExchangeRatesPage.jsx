import React from 'react';
import { Typography, Box } from '@mui/material';
import ExchangeRateTable from "../components/ExchangeRateTable";



import { useExchangeRates } from '../hooks/useExchangeRates';



import { useAppContext } from '../context/AppContext'; 

const ExchangeRatesPage = () => {
  const { baseCurrency } = useAppContext(); 
  const { rates, loading, error } = useExchangeRates(baseCurrency);

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Live Exchange Rates (Base: {baseCurrency})
      </Typography>
      <ExchangeRateTable
        rates={rates}
        loading={loading}
        error={error}
        baseCurrency={baseCurrency}
      />
    </Box>
  );
};

export default ExchangeRatesPage;