import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import Home from './routes/home/index.tsx';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Index } from './routes/explore/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/explore' element={<Index />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
