import React from 'react';
import Header from './components/header.jsx';
import MainSection from './components/Mainsection.jsx';
import Footer from './components/footer.jsx';
import Products from './components/products.jsx'

const App = () => {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      < Header/>
      < MainSection/>
      < Footer/>
    </div>
  )
}

export default App