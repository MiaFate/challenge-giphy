import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 1. import `ChakraProvider` component
import { Box, ChakraProvider } from '@chakra-ui/react'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ChakraProvider tab="home">
    <Box bg='#fbe3f8' >
      <App />
    </Box>
  </ChakraProvider>
);

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
