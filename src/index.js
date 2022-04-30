import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './index.css';
import App from './App';
import Detail from './components/Detail';
import reportWebVitals from './reportWebVitals';
import { Box, ChakraProvider } from '@chakra-ui/react';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ChakraProvider tab="home">
  <BrowserRouter>
      <Box bg='#fbe3f8' width={'100vw'} >
        <Routes>
          <Route exact path="/" element={<App />} />
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
