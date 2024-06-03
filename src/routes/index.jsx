import { Route, Routes as ReactRoutes } from 'react-router-dom';
import Home from '../pages/Home';
import Delivery from '../pages/order/Delivery';
import Cart from '../pages/Cart';
import Payment from '../pages/order/Payment';
import Finish from '../pages/order/Finish';
import Checkout from '../pages/order/Checkout';
import Login from '../pages/Login';

export const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/order/delivery" element={<Delivery />} />
      <Route path="/order/payment" element={<Payment />} />
      <Route path="/order/checkout" element={<Checkout />} />
      <Route path="/order/finish" element={<Finish />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
    </ReactRoutes>
  );
};
