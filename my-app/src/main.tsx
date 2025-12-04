import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import Home from './routes/home/index.tsx';
import { BrowserRouter, Routes, Route } from 'react-router';
import Explore from './routes/explore/index.tsx';
import TripRecommendation from './routes/trip_recommendation/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/trip_recommendation' element={<TripRecommendation />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
