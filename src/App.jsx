import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import BarcodeSearch from './components/BarcodeSearch';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:barcode" element={<ProductDetail />} />
          <Route path="/barcode-search" element={<BarcodeSearch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
