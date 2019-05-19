import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Modal from './components/Modal';
import BaiTapGioHang from './components/BaiTapGioHang/BaiTapGioHang';
function App() {

  return (
    <div className="App">
      {/* <Header />
      <Slider />
      <ProductList />
      <Footer />
      <Modal /> */}
  <BaiTapGioHang /> 
      
    </div>
  );
}

export default App;
