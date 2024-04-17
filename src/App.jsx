import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header.jsx';
import MainSection from './components/Mainsection.jsx';
import Footer from './components/footer.jsx';
import Shop from './components/shop.jsx'; // Import the Shop component

const App = () => {
  return (
    <Router>
      <div className='flex flex-col min-h-[100dvh]'>
        <Header />
        <Routes>
          <Route exact path="/" element={<MainSection />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
