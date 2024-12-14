import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import Home from './Pages/Home.jsx';
import AddProduct from './Pages/Addproducts.jsx';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);


  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/add-product" element={<AddProduct onAddProduct={addProduct} />} />
      </Routes>
    </Router>
  );
};

export default App;
