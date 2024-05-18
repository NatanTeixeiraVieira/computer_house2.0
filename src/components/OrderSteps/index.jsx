import './styles.css';
import PersonIcon from '@mui/icons-material/Person';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaidIcon from '@mui/icons-material/Paid';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export default function OrderSteps() {
  return (
    <section className="order-steps">
      <span className="step success">
        <PersonIcon fontSize={'medium'} />
      </span>
      <span className="path success"></span>
      <span className="step current">
        <LocalShippingIcon fontSize={'medium'} />
      </span>
      <span className="path"></span>
      <span className="step">
        <PaidIcon fontSize={'medium'} />
      </span>
      <span className="path"></span>
      <span className="step">
        <ShoppingBagIcon fontSize={'medium'} />
      </span>
    </section>
  );
}
