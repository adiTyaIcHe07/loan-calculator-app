import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


import { AppBar, Toolbar, Typography, Button, IconButton, Box, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';


import Brightness7Icon from '@mui/icons-material/Brightness7';
import CalculateIcon from '@mui/icons-material/Calculate'; 

import { useAppContext } from '../context/AppContext';

const Header = () => {
  const { themeMode, toggleTheme } = useAppContext();
  const navigate = useNavigate();
  const theme = useTheme(); 


  const navLinkStyle = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    color: theme.palette.common.white, 


    textDecoration: 'none',
    margin: '0 10px',
    padding: '6px 8px', 
    borderRadius: theme.shape.borderRadius, 
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)', 
        
    }
  });

  return (
    <AppBar position="static">
      <Toolbar>
         <CalculateIcon sx={{ mr: 1 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Loan Calculator
        </Typography>
        <Box>
          <Button component={NavLink} to="/" style={navLinkStyle}>
             Home
          </Button>
          <Button component={NavLink} to="/exchange-rates" style={navLinkStyle}>
            Exchange Rates (Live)
          </Button>
          <Button component={NavLink} to="/about" style={navLinkStyle}>
            About
          </Button>
          <Button color="inherit" onClick={() => navigate('/error-page')}>
            Error Page {}
          </Button>
        </Box>


        <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
          {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;