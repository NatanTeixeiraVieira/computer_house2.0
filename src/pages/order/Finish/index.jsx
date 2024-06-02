import { Link } from 'react-router-dom';
import OrderSteps from '../../../components/OrderSteps';
import './styles.css';
import { useOrderStore } from '../../../store/order';

export default function Finish() {
  const {
    state: { paymentForm },
  } = useOrderStore();

  const isPix = paymentForm === 'pix';

  return (
    <div className="finish">
      <OrderSteps />
      <section>
        <h1 className="title" style={{ fontSize: isPix ? '1.5rem' : '2rem' }}>
          {isPix
            ? 'Escaneie o QR-Code ou utilize o código para realizar o pagamento'
            : 'Seu pedido foi finalizado. Em breve ele chegará ao endereço informado'}
        </h1>
        {isPix && (
          <div className="pix">
            <div className="pix-payment-options">
              <div className="code">
                <h3>Código do pagamento</h3>
                <span className="payment-code">9574582136521050</span>
              </div>
              <div className="qr-code">
                <h3>QR Code para pagamento</h3>
                <img
                  src="/public/images/qr-code.png"
                  alt="Imagem de qr-code para pagemento"
                />
              </div>
            </div>
          </div>
        )}
        <h2>Obrigado! Volte sempre</h2>
        <div className="shake-hands-image-container">
          <img src="/images/shake-hands.png" alt="" />
        </div>
        <div className="button-back">
          <Link to="/">Voltar</Link>
        </div>
      </section>
    </div>
  );
}
