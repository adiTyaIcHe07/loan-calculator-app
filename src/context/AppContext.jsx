import React, { createContext, useState, useMemo, useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';


import { lightTheme, darkTheme } from '../theme/theme';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light'); 

  const [baseCurrency] = useState('USD'); 

  const [targetCurrency, setTargetCurrency] = useState('USD'); 

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(
    () => (themeMode === 'light' ? lightTheme : darkTheme),
    [themeMode]
  );

  const contextValue = useMemo(
    () => ({
      themeMode,

      toggleTheme,
      baseCurrency,
      targetCurrency,

      setTargetCurrency,
    }),
    [themeMode, baseCurrency, targetCurrency] 
  );

  return (
    <AppContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline /> {}

        {children}
      </MuiThemeProvider>
    </AppContext.Provider>

  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


export const useAppContext = () => {

  const context = useContext(AppContext);
  if (context === undefined) {

    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};