import { useState, useEffect, useCallback } from 'react';


import { getExchangeRates } from '../api/exchangeRateService';


/**
 * Custom hook to fetch and manage exchange rates.
 * @param {string} baseCurrency - The base currency to fetch rates for.
 * @returns {object} - Contains rates, loading state, error state, and a refetch function.
 */
export const useExchangeRates = (baseCurrency = 'USD') => {
  const [rates, setRates] = useState(null);



  const [loading, setLoading] = useState(true);


  const [error, setError] = useState(null);

  const fetchRates = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const fetchedRates = await getExchangeRates(baseCurrency);
      setRates(fetchedRates);
    } catch (err) {
        console.error("Failed to fetch rates in hook:", err);
      setError(err.message || 'Could not fetch exchange rates.');
      setRates(null);
    } finally {
      setLoading(false);
    }
  }, [baseCurrency]);

  useEffect(() => {
    fetchRates();
    
  }, [fetchRates]); 

  return { rates, loading, error, refetchRates: fetchRates };
};