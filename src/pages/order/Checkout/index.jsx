import { useNavigate } from 'react-router-dom';
import OrderSteps from '../../../components/OrderSteps';
import { useOrderStore } from '../../../store/order';
import './styles.css';
import FormActionButtons from '../../../components/FormActionButtons';
import { useReloadFormPage } from '../../../hooks/useReloadFormPage';
import { deleteAllProductsCart } from '../../../services/cart';

export default function Checkout() {
  const {
    state: { order, paymentForm, creditCard },
  } = useOrderStore();

  useReloadFormPage();

  const navigate = useNavigate();

  const handleFinishOrder = async () => {
    await deleteAllProductsCart();
    navigate('/order/finish');
  };

  return (
    <div className="checkout">
      <OrderSteps />
      <div className="order-summary">
        <h1>Resumo do Pedido</h1>

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
