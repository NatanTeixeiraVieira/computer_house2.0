import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Delivery from '../pages/order/Delivery';
import Cart from '../pages/Cart';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order/delivery" element={<Delivery />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};
