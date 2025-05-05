/**
 * For my understanig
 
 * Formats a number as a currency string.
 * @param {number} amount - The number to format.
 * @param {string} currencyCode - The ISO 4217 currency code (e.g., 'USD', 'EUR').
 * @param {number} minimumFractionDigits - Minimum decimal places. Default 2.
 * @param {number} maximumFractionDigits - Maximum decimal places. Default 2.
 * @returns {string} - Formatted currency string or empty string if amount is invalid.
 */
export const formatCurrency = (
    amount,
    currencyCode = 'USD', 
    minimumFractionDigits = 2,
    maximumFractionDigits = 2
    ) => {
    if (typeof amount !== 'number' || isNaN(amount)) {


        console.warn('Invalid amount provided to formatCurrency:', amount);
        return ''; 
    }

    const formatter = new Intl.NumberFormat('en-US', { 

       
        minimumFractionDigits: minimumFractionDigits,
        maximumFractionDigits: maximumFractionDigits,
    });

    return `${formatter.format(amount)} ${currencyCode}`;
};