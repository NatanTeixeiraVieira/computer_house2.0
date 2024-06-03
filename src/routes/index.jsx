import { Route, Routes as ReactRoutes } from 'react-router-dom';
import Home from '../pages/Home';
import Delivery from '../pages/order/Delivery';
import Cart from '../pages/Cart';
import Payment from '../pages/order/Payment';
import Finish from '../pages/order/Finish';
import Checkout from '../pages/order/Checkout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import RequireAuth from '../components/RequireAuth';

export const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/order/delivery"
        element={
          <RequireAuth>
            <Delivery />
          </RequireAuth>
        }
      />
      <Route
        path="/order/payment"
        element={
          <RequireAuth>
            <Payment />
          </RequireAuth>
        }
      />
      <Route
        path="/order/checkout"
        element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        }
      />
      <Route
        path="/order/finish"
        element={
          <RequireAuth>
            <Finish />
          </RequireAuth>
        }
      />
      <Route
        path="/cart"
        element={
          <RequireAuth>
            <Cart />
          </RequireAuth>
        }
      />
    </ReactRoutes>
  );
};
