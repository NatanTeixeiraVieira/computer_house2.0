import { useNavigate } from 'react-router-dom';
import OrderSteps from '../../../components/OrderSteps';
import { useOrderStore } from '../../../store/order';
import './styles.css';
import FormActionButtons from '../../../components/FormActionButtons';
import { useReloadFormPage } from '../../../hooks/useReloadFormPage';
import { saveOrder } from '../../../services/order';
import { useEffect, useState } from 'react';
import { getUser } from '../../../services/user';

export default function Checkout() {
  const {
    state: { order, paymentForm, creditCard },
  } = useOrderStore();

  useReloadFormPage();

  const navigate = useNavigate();

  const handleFinishOrder = async () => {
    await saveOrder({ order, paymentForm, creditCard });

    navigate('/order/finish');
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('token');
      console.log('🚀 ~ token:', token);
      const response = await getUser(JSON.parse(token));

      setUser(response);
    })();
  }, []);

  return (
    <div className="checkout">
      <OrderSteps />
      <div className="order-summary">
        <h1>Resumo do Pedido</h1>

        {user && (
          <section className="section">
            <h2>Resumo pessoal</h2>
            <p>
              <strong>Nome completo:</strong> {user.name} {user.surname}
            </p>
            <p>
              <strong>Telefone:</strong> {user.phoneNumber}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </section>
        )}

        <section className="section">
          <h2>Endereço de Entrega</h2>
          <p>
            <strong>CEP:</strong> {order.delivery.cep}
          </p>
          <p>
            <strong>Estado:</strong> {order.delivery.state}
          </p>
          <p>
            <strong>Cidade:</strong> {order.delivery.city}
          </p>
          <p>
            <strong>Bairro:</strong> {order.delivery.neighborhood}
          </p>
          <p>
            <strong>Rua:</strong> {order.delivery.street}
          </p>
          <p>
            <strong>Número:</strong> {order.delivery.number}
          </p>
          <p>
            <strong>Forma de Pagamento:</strong>{' '}
            {paymentForm
              ? paymentForm === 'credit-card'
                ? 'Cartão de crédito'
                : 'Pix'
              : 'Não econtrado'}
          </p>
        </section>

        {paymentForm === 'credit-card' && (
          <section className="section">
            <h2>Cartão de Crédito</h2>
            <p>
              <strong>Número:</strong> {creditCard?.number}
            </p>
            <p>
              <strong>Nome:</strong> {creditCard?.name}
            </p>
            <p>
              <strong>Parcelas:</strong> {creditCard?.installment}
            </p>
          </section>
        )}

        <FormActionButtons
          contibueButtonContent={'Finalizar pedido'}
          onContinueButtonClick={handleFinishOrder}
        />
      </div>
    </div>
  );
}
