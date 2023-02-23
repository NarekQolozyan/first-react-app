import React from 'react';
import { Routes, Route, } from "react-router-dom";
import './Style.css'
import Header from './Header';
import {Products,OneProduct} from './Product';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/book/:id' element={<OneProduct/>}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
