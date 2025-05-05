import React, { useState } from 'react';

import PropTypes from 'prop-types';

import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography,
    TablePagination, CircularProgress, Alert, Box
} from '@mui/material';

const ExchangeRateTable = ({ rates, loading, error, baseCurrency = 'USD' }) => {
    const [page, setPage] = useState(0);

    const [rowsPerPage, setRowsPerPage] = useState(10);

    if (loading) {
        return (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
             <CircularProgress />
             <Typography sx={{ ml: 2 }}>Loading Exchange Rates...</Typography>
          </Box>
        );
    }

    if (error) {
        return <Alert severity="error" sx={{ mt: 2 }}>Error loading exchange rates: {error}</Alert>;
    }

    if (!rates) {
        return <Typography sx={{ mt: 2, fontStyle: 'italic' }}>No exchange rate data available.</Typography>;
    }

    const rateEntries = Object.entries(rates);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Paginate data
    const paginatedRates = rateEntries.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', mt: 3 }}>
             <Typography variant="h6" component="div" sx={{ p: 2 }}>
                Live Exchange Rates (Base: {baseCurrency})
            </Typography>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="exchange rates table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Currency</TableCell>
                            <TableCell align="right">Rate (1 {baseCurrency} = X)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedRates.map(([currencyCode, rate]) => (
                            <TableRow hover role="checkbox" tabIndex={-1} key={currencyCode}>
                                <TableCell component="th" scope="row">
                                    {currencyCode}
                                </TableCell>
                                <TableCell align="right">
                                    {}
                                    {typeof rate === 'number' ? rate.toFixed(4) : 'N/A'}
                                </TableCell>
                            </TableRow>
                        ))}
                        {rateEntries.length === 0 && (
                             <TableRow>
                                <TableCell colSpan={2} align="center">No rates found.</TableCell>
                             </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rateEntries.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

ExchangeRateTable.propTypes = {
    rates: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    baseCurrency: PropTypes.string,
};

export default ExchangeRateTable;