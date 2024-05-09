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
import CartModal from './components/CartModel.jsx';
import CartPage from './components/CartPage.jsx';
import CheckoutPage from './components/Checkout.jsx';
import FeedbackForm from './components/feedback.jsx';

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setCartCount((prevCount) => prevCount + 1);
    setIsCartModalOpen(true);
  };

  const handleCloseCartModal = () => {
    setIsCartModalOpen(false);
  };

  return (
    <Router>
      <div className='flex flex-col min-h-[100dvh]'>
        <Header cartCount={cartCount} cart={cart} />
        <Routes>
          <Route exact path="/" element={<MainSection />} />
          <Route path="/shop" element={<Shop onAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} />} />
          <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/stockists" element={<Stockists />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div>No match</div>} />
        </Routes>
        <Footer />
        <CartModal
          cart={cart}
          isOpen={isCartModalOpen}
          onClose={handleCloseCartModal}
        />
      </div>
    </Router>
  );
};

export default App;
