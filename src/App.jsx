import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header.jsx';
import MainSection from './components/Mainsection.jsx';
import Footer from './components/footer.jsx';
import Shop from './components/shop.jsx';
import Recipes from './components/recipes.jsx';
import Stockists from './components/stockists.jsx';
import FAQs from './components/faqs.jsx';
import Contact from './components/contact.jsx';
import CartModal from './components/CartModel.jsx';
import CartPage from './components/CartPage.jsx';
import FeedbackForm from './components/feedback.jsx';
import LoginPage from './components/LoginPage.jsx';
import SignUpPage from './components/SignUpPage.jsx';
import NotFoundPage from './components/404.jsx';
import Search from './components/search.jsx';
import ProductPage from './components/ProductPage.jsx'; // Import the ProductPage component

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

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
        <Header cartCount={cartCount} />
        <Routes>
          <Route exact path="/" element={<MainSection />} />
          <Route path="/search" element={<Search onSearch={handleSearch} />} />
          <Route path="/shop" element={<Shop onAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/stockists" element={<Stockists />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/signuppage" element={<SignUpPage />} />
          <Route path="/product/:productId" element={<ProductPage />} /> {/* Add this route */}
          <Route path="*" element={<NotFoundPage />} />
          <Route path="*" element={<div>No match</div>} />
        </Routes>
        <Footer />
        <CartModal cart={cart} isOpen={isCartModalOpen} onClose={handleCloseCartModal} />
      </div>
    </Router>
  );
};

export default App;