import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './index.css';
import App from './App';
import Detail from './components/Detail';
import Login from './components/Login';
import reportWebVitals from './reportWebVitals';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react'
import theme from './theme'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ChakraProvider theme={theme} tab="home">
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <BrowserRouter>
      {/* width={'100vw'} */}
      {/* bg='#fbe3f8'  */}
      <Box  >
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<App />} />
          <Route
            path={`/detail/:id`}
            element={<Detail />}
          />
        </Routes>
      </Box>
    </BrowserRouter>
  </ChakraProvider>
);

reportWebVitals();
