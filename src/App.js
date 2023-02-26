import React from 'react';
import { Routes, Route, } from "react-router-dom";
import './Style.css'
import Header from './Header';
import {Products,OneProduct} from './Product';
import Footer from './Footer';
import MoreInfo from './MoreInfo';
import Contact from './Contact';
import AboutUs from './AbouteUs';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/moreinfo' element={<MoreInfo/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/book/:id' element={<OneProduct/>}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
