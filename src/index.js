import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import Letters from './components/letters';
import Numbers from './components/numbers';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/letters" element={<Letters />} />
        <Route exact path="/numbers" element={<Numbers />} />
        <Route exact path="*" element={<Navigate exact to="/letters" />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
