import Page404 from '../pages/Page404';
import AboutUs from '../pages/AboutUs';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
