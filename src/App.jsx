import React from 'react';

import { Routes, Route } from 'react-router-dom';



import { Container, Box } from '@mui/material';

import Header from './components/Header';

import HomePage from './pages/HomePage';

import ExchangeRatesPage from './pages/ExchangeRatesPage';
import AboutPage from './pages/AboutPage';

import NotFoundPage from './pages/NotFoundPage';



import ErrorPage from './pages/ErrorPage'; 


function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}> {}
        <Box sx={{ minHeight: 'calc(100vh - 180px)' }}> {}


          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/exchange-rates" element={<ExchangeRatesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/error-page" element={<ErrorPage />} /> {}


            <Route path="*" element={<NotFoundPage />} /> {}
          </Routes>
        </Box>
      </Container>

      {} {}
    </>
  );
}

export default App;