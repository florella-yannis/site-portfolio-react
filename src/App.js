import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:projectId" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;