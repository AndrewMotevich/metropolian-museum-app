import React from 'react';
import Page404 from '../pages/Page404';
import AboutUs from '../pages/AboutUs';
import MainPage from '../pages/MainPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Forms from '../pages/Forms';

const Router = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/404" element={<Page404 />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/" element={<Navigate to="/main" />} />
      </Routes>
    </div>
  );
};

export default Router;
