import { useEffect, useState } from 'react';
import OrderSteps from '../../../components/OrderSteps';
import './styles.css';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PixIcon from '@mui/icons-material/Pix';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { creditCardPaymentSchema } from '../../../validations/schemas';
import InputField from '../../../components/InputField';
import { useOrderStore } from '../../../store/order';
import { useNavigate } from 'react-router-dom';
import FormActionButtons from '../../../components/FormActionButtons';
import { useReloadFormPage } from '../../../hooks/useReloadFormPage';

export default function Payment() {
  const [paymentForm, setPaymentForm] = useState('');
  const [installment, setInstallment] = useState(1);
  const navigate = useNavigate();

  const {
    actions: { addPayment, addPix },
  } = useOrderStore();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(creditCardPaymentSchema),
  });

  useReloadFormPage();

  const handleSelectPaymentMethod = (method) => {
    setPaymentForm(method);
  };

  const handleSubmitCreditCard = ({ number, name }) => {
    addPayment({ paymentForm, number, name, installment });

    navigate('/order/checkout');
  };

  const handleSubmitPix = () => {
    addPix({ paymentForm });
    navigate('/order/checkout');
  };

  const handleSelectInstallment = (event) => {
    setInstallment(event.target.value);
  };

  return (
    <>
      <OrderSteps className="payment-steps" />
      <section className="payment">
        <h1 className="title">Escolha a forma de pagamento</h1>
        <div className="forms">
          <div className="credit-card">
            <div
              className="payment-method"
              onClick={() => handleSelectPaymentMethod('credit-card')}
            >
              <input type="radio" name="payment-methods" id="credit-card" />

              <label htmlFor="credit-card">
                <CreditCardIcon /> Cartão de crédito
              </label>
            </div>

            {paymentForm === 'credit-card' && (
              <form
                className="form form-credit-card"
                onSubmit={handleSubmit(handleSubmitCreditCard)}
              >
                <h2>Cartão de crédito</h2>
                <div className="field">
                  <InputField
                    label="Número do cartão"
                    helperText={errors.number?.message}
                    type="number"
                    name="input-credit-card-number"
                    id="input-credit-card-number"
                    className="input"
                    {...register('number')}
                  />
                </div>
                <div className="field">
                  <InputField
                    label="Nome impresso no cartão"
                    helperText={errors.name?.message}
                    type="text"
                    name="input-credit-card-name"
                    id="input-credit-card-name"
                    className="input"
                    {...register('name')}
                  />
                </div>
                <div className="field">
                  <label htmlFor="installment">Número de parcelas</label>
                  <select
                    id="installment"
                    className="installment"
                    value={installment}
                    onChange={(event) => handleSelectInstallment(event)}
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                  </select>
                </div>
              </form>
            )}
          </div>

          <div className="pix">
            <div
              className="payment-method"
              onClick={() => handleSelectPaymentMethod('pix')}
            >
              <input type="radio" name="payment-methods" id="pix" />
              <label htmlFor="pix">
                <PixIcon sx={{ mr: '0.5rem' }} />
                Pix
              </label>
              <label htmlFor="pix" className="pix-approved-text">
                Aprovação em minutos
              </label>
            </div>
            {paymentForm === 'pix' && (
              <p>
                Copie o código Pix na próxima etapa e faça o pagamento na
                instituição bancária de sua escolha. O código tem validade de 24
                horas.
              </p>
            )}
          </div>
        </div>
        <FormActionButtons
          onContinueButtonClick={
            paymentForm === 'credit-card'
              ? handleSubmit(handleSubmitCreditCard)
              : handleSubmitPix
          }
        />
      </section>
    </>
  );
}
