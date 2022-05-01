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

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ChakraProvider tab="home">
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <BrowserRouter>
      {/* width={'100vw'} */}
      <Box bg='#fbe3f8'  >
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route
            path={`/detail/:id`}
            element={<Detail />}
          />
          <Route path="/home" element={<App />} />
        </Routes>
      </Box>
    </BrowserRouter>
  </ChakraProvider>
);

reportWebVitals();
