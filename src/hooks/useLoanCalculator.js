import { useState, useCallback } from 'react';

/**
 * 
 * @returns {object} - Contains emi, schedule, calculateLoan function, and error state.
 */
export const useLoanCalculator = () => {
  const [emi, setEmi] = useState(null);

  
  const [schedule, setSchedule] = useState([]);

  const [error, setError] = useState(null);

  const calculateLoan = useCallback((principal, annualRate, termYears) => {
    setError(null); 
    setEmi(null);
    setSchedule([]);

    const p = parseFloat(principal);
    const rAnnual = parseFloat(annualRate);
    const t = parseInt(termYears, 10);

    if (isNaN(p) || p <= 0 || isNaN(rAnnual) || rAnnual < 0 || isNaN(t) || t <= 0) {
        setError('Please enter valid positive numbers for all fields.');
        return;
    }
    if (rAnnual > 100) {
        setError('Interest rate seems too high (should be percentage, e.g., 8.5).');
        return;
    }


    const rMonthly = rAnnual / 100 / 12; 
    const n = t * 12;

    if (rMonthly === 0) {
        const calculatedEmi = p / n;
        setEmi(calculatedEmi);

        const newSchedule = [];
        let remainingBalance = p;
        for (let i = 1; i <= n; i++) {
            const principalPayment = calculatedEmi;
            remainingBalance -= principalPayment;
            newSchedule.push({
                month: i,
                principalPayment: principalPayment,
                interestPayment: 0,
                totalPayment: calculatedEmi,
                remainingBalance: Math.max(0, remainingBalance), 
            });
        }
        setSchedule(newSchedule);
        return;
    }


    






    const calculatedEmi =
      (p * rMonthly * Math.pow(1 + rMonthly, n)) /
      (Math.pow(1 + rMonthly, n) - 1);

    setEmi(calculatedEmi);

    

    const newSchedule = [];
    let remainingBalance = p;
    for (let i = 1; i <= n; i++) {
      const interestPayment = remainingBalance * rMonthly;
      const principalPayment = calculatedEmi - interestPayment;
      remainingBalance -= principalPayment;

      
      let currentMonthEmi = calculatedEmi;
      if (i === n && remainingBalance > -0.01 && remainingBalance < 0.01) {
          remainingBalance = 0;
      }


      newSchedule.push({
        month: i,
        principalPayment: principalPayment,
        interestPayment: interestPayment,
        totalPayment: currentMonthEmi, 
        remainingBalance: Math.max(0, remainingBalance), 
      });

       
       if (remainingBalance < -1) { 
          console.error("Error: Negative balance detected in amortization calculation. Stopping.");
          setError("Calculation error led to negative balance.");
          setSchedule([]); 

          setEmi(null);
          break;
       }
    }
    setSchedule(newSchedule);
  }, []); 

  return { emi, schedule, calculateLoan, error };
};