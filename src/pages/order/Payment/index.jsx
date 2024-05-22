import { useState } from 'react';
import OrderSteps from '../../../components/OrderSteps';
import './styles.css';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PixIcon from '@mui/icons-material/Pix';

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSelectPaymentMethod = (method) => {
    setPaymentMethod(method);
  };

  return (
    <>
      <OrderSteps className="payment-steps" />
      <section className="payment">
        <h1 className="title">Escolha a forma de pagamento</h1>
        <div className="forms">
          <div
            className="credit-card payment-method"
            onClick={() => handleSelectPaymentMethod('credit-card')}
          >
            <input type="radio" name="payment-methods" />
            <CreditCardIcon />
            <span>Cartão de crédito</span>
          </div>

          {paymentMethod === 'credit-card' && (
            <form action="finish.html" className="form form-credit-card">
              <h2>Cartão de crédito</h2>
              <div className="field">
                <label htmlFor="input-credit-card-number" className="label">
                  Número do cartão
                </label>
                <input
                  type="number"
                  name="input-credit-card-number"
                  id="input-credit-card-number"
                  className="input"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="input-credit-card-name" className="label">
                  Nome impresso no cartão
                </label>
                <input
                  type="text"
                  name="input-credit-card-name"
                  id="input-credit-card-name"
                  className="input"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="installment">Número de parcelas</label>
                <select
                  name="installment"
                  id="installment"
                  className="installment"
                  required
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
              </div>
              <button type="submit" className="finish-button">
                Concluir pedido
              </button>
            </form>
          )}

          <hr />

          <div
            className="pix payment-method"
            onClick={() => handleSelectPaymentMethod('pix')}
          >
            <input type="radio" name="payment-methods" />
            <PixIcon />
            <span>Pix</span>
            <span>Aprovação em minutos</span>
          </div>
          {paymentMethod === 'pix' && (
            <form>
              <p>
                Copie o código Pix na próxima etapa e faça o pagamento na
                instituição bancária de sua escolha. O código tem validade de 24
                horas.
              </p>
              <button type="submit" className="finish-button">
                Concluir pedido
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
