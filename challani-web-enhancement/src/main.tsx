import { CssBaseline, ThemeProvider } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import theme from './theme.ts';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </StyledThemeProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
