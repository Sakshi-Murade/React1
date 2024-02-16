import React, { useState } from 'react';
import Navbar from './components/Navbar.js';
import FoodList from './components/FoodList';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (foodItem) => {
    setCart([...cart, foodItem]);
  };

  return (
    <div className="App">
      <Navbar cartSize={cart.length} />
      <FoodList addToCart={addToCart} />
    </div>
  );
}

export default App;

