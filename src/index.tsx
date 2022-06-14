import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { GlobalStyle } from 'styles';
import ContentsPage from 'pages/ContentsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/contents" element={<ContentsPage />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
