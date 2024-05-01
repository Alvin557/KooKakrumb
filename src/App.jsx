import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header.jsx';
import MainSection from './components/Mainsection.jsx';
import Footer from './components/footer.jsx';
import Shop from './components/shop.jsx'; // Import the Shop component
import Recipes from './components/recipes.jsx';
import Stockists from './components/stockists.jsx';
import FAQs from './components/faqs.jsx';
import Contact from './components/contact.jsx';
const App = () => {
  return (
    <Router>
      <div className='flex flex-col min-h-[100dvh]'>
        <Header />
        <Routes>
                <Route exact path="/" element={<MainSection />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/stockists" element={<Stockists />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<div>No match</div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
