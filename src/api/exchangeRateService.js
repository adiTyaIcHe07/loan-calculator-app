import axios from 'axios';

const API_KEY = import.meta.env.VITE_EXCHANGERATE_API_KEY;


const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

/**
 * Fetches the latest exchange rates for a given base currency.
 * @param {string} baseCurrency - The base currency code (e.g., 'USD').
 * @returns {Promise<object>} - A promise that resolves with the conversion rates object.
 */
export const getExchangeRates = async (baseCurrency = 'USD') => {
  if (!API_KEY) {
    console.error("API Key for ExchangeRate-API is missing. Please set VITE_EXCHANGERATE_API_KEY in your .env file.");
    throw new Error("API Key is missing. Cannot fetch exchange rates.");
  }
  try {
    const response = await axios.get(`${BASE_URL}/latest/${baseCurrency}`);
    if (response.data && response.data.result === 'success') {
      return response.data.conversion_rates;
    } else {
      throw new Error(response.data['error-type'] || 'Failed to fetch exchange rates');
    }
  } catch (error) {
    console.error('Error fetching exchange rates:', error.response?.data || error.message);
    
    const errorMessage = error.response?.data?.['error-type']
      ? `API Error: ${error.response.data['error-type']}`
      : `Network or server error: ${error.message}`;
    throw new Error(errorMessage);
  }
};