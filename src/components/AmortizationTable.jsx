import React from 'react';
import PropTypes from 'prop-types';

import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography
} from '@mui/material';


import { formatCurrency } from '../utils/formatters';

const AmortizationTable = ({ schedule, currency = 'USD' }) => {
  if (!schedule || schedule.length === 0) {
    return <Typography sx={{ mt: 2, fontStyle: 'italic' }}>Enter loan details to see the amortization schedule.</Typography>;
  }

  return (
    <TableContainer component={Paper} sx={{ mt: 3, maxHeight: 440 }}> {}
      <Typography variant="h6" component="div" sx={{ p: 2 }}>
        Amortization Schedule ({currency})
      </Typography>
      <Table stickyHeader aria-label="amortization schedule table">
        <TableHead>
          <TableRow>
            <TableCell>Month</TableCell>
            <TableCell align="right">Principal</TableCell>
            <TableCell align="right">Interest</TableCell>
            <TableCell align="right">Total Payment</TableCell>
            <TableCell align="right">Remaining Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schedule.map((row) => (
            <TableRow key={row.month} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.month}
              </TableCell>
              <TableCell align="right">{formatCurrency(row.principalPayment, currency)}</TableCell>
              <TableCell align="right">{formatCurrency(row.interestPayment, currency)}</TableCell>
              <TableCell align="right">{formatCurrency(row.totalPayment, currency)}</TableCell>
              <TableCell align="right">{formatCurrency(row.remainingBalance, currency)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

AmortizationTable.propTypes = {
  schedule: PropTypes.arrayOf(
    PropTypes.shape({
      month: PropTypes.number.isRequired,
      principalPayment: PropTypes.number.isRequired,
      interestPayment: PropTypes.number.isRequired,
      totalPayment: PropTypes.number.isRequired,
      remainingBalance: PropTypes.number.isRequired,
    })
  ).isRequired,
  currency: PropTypes.string.isRequired,
};

export default AmortizationTable;