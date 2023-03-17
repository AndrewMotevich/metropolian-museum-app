import Page404 from '../pages/Page404';
import AboutUs from '../pages/AboutUs';
import MainPage from '../pages/MainPage';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
