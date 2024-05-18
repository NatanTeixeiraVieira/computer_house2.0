import { useEffect, useState } from 'react';
import { getCartProducts } from '../../services/cart';
import Product from '../../components/Product';
import './styles.css';
import { formatCurrency, formatCurrencyToValue } from '../../utils/format';
import { Link } from 'react-router-dom';

export default function Cart() {
  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [discountInPercentage, setDiscountInPercentage] = useState(0);

  useEffect(() => {
    (async () => {
      const productCart = await getCartProducts();
      let subTotal = 0;
      let total = 0;
      productCart.forEach((product) => {
        console.log('🚀 ~ productCart.forEach ~ product:', product);
        subTotal += formatCurrencyToValue(product.price);
        total += formatCurrencyToValue(product.priceDiscount ?? product.price);
      });
      const discount = 100 - Math.round((total / subTotal) * 100);
      setProducts(productCart);
      setSubtotal(subTotal);
      setTotal(total);
      setDiscountInPercentage(discount);
    })();
  }, []);

  return (
    <div className="cart">
      {products.length > 0 && (
        <>
          <section className="products">
            <ul className="products-grid">
              {products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </ul>
          </section>
          <section className="payment">
            <div className="pay">
              <span>Subtotal: {formatCurrency(subtotal)}</span>
              <span>
                <strong>Desconto: {discountInPercentage}%</strong>
              </span>
              <span className="total">
                <strong>Total: {formatCurrency(total)}</strong>
              </span>
            </div>
            <button className="button">
              <Link to={'/order/delivery'}>Finalizar pedido</Link>
            </button>
          </section>
        </>
      )}

      {products.length <= 0 && (
        <h2 className="no-products">
          Você ainda não adicionou nenhum produto ao carrinho
        </h2>
      )}
    </div>
  );
}
