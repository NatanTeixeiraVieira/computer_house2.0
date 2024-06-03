import './styles.css';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaidIcon from '@mui/icons-material/Paid';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function OrderSteps({ className, ...rest }) {
  const location = useLocation();

  const [paths, setPaths] = useState([]);

  useEffect(() => {
    const getPath = (path) => {
      return location.pathname.includes(path);
    };

    if (getPath('delivery')) {
      setPaths(['current', '', '', '']);
      return;
    }

    if (getPath('payment')) {
      setPaths(['success', 'current', '', '']);
      return;
    }

    if (getPath('checkout')) {
      setPaths(['success', 'success', 'current', '']);
      return;
    }

    if (getPath('finish')) {
      setPaths(['success', 'success', 'success', 'success']);
      return;
    }
  }, [location.pathname]);

  return (
    <section className={`order-steps ${className}`} {...rest}>
      <span className={`step ${paths[0]}`}>
        <LocalShippingIcon fontSize={'medium'} />
      </span>
      <span className={`path ${paths[0]}`}></span>
      <span className={`step ${paths[1]}`}>
        <PaidIcon fontSize={'medium'} />
      </span>
      <span className={`path ${paths[1]}`}></span>
      <span className={`step ${paths[2]}`}>
        <ShoppingCartCheckoutIcon fontSize={'medium'} />
      </span>
      <span className={`path ${paths[2]}`}></span>
      <span className={`step ${paths[3]}`}>
        <ShoppingBagIcon fontSize={'medium'} />
      </span>
    </section>
  );
}
