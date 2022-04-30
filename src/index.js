import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Box, ChakraProvider } from '@chakra-ui/react'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ChakraProvider tab="home">
    <Box bg='#fbe3f8' width={'100vw'} >
      <App />
    </Box>
  </ChakraProvider>
);

reportWebVitals();
