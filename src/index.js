import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './index.css';
const App = lazy(() => import('./App'));
const Detail = lazy(() => import('./components/Detail'));
const Login = lazy(() => import('./components/Login'));
import Loader from './components/Loader';
import reportWebVitals from './reportWebVitals';
import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react'
import theme from './theme'
import { ErrorBoundary } from 'react-error-boundary';

const container = document.getElementById('root');
const root = createRoot(container);
const ErrorFallback = () => {
  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <h1>Something went wrong</h1>
    </Flex>
  )
}
root.render(
  <ChakraProvider theme={theme} tab="home">
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Suspense fallback={<Loader />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BrowserRouter>
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
      </ErrorBoundary>
    </Suspense>
  </ChakraProvider>
);

reportWebVitals();
