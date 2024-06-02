import { useCallback, useEffect, useRef, useState } from 'react';
import { getCartProducts, removeProductFromCart } from '../../services/cart';
import Product from '../../components/Product';
import './styles.css';
import { formatCurrency, formatCurrencyToValue } from '../../utils/format';
import { Link } from 'react-router-dom';
import ConfirmDelete from '../../components/ConfirmDelete';

export default function Cart() {
  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [discountInPercentage, setDiscountInPercentage] = useState(0);
  const [isConfirmDeleteModalOpen, setIsConfirmDeleteModalOpen] =
    useState(false);

  const currentProductClicked = useRef(null);

  const calculateProductValues = useCallback(() => {
    let subTotal = 0;
    let total = 0;
    products.forEach((product) => {
      subTotal += formatCurrencyToValue(product.price);
      total += formatCurrencyToValue(product.priceDiscount ?? product.price);
    });
    const discount = 100 - Math.round((total / subTotal) * 100);
    setSubtotal(subTotal);
    setTotal(total);
    setDiscountInPercentage(discount);
  }, [products]);

  useEffect(() => {
    (async () => {
      const productCart = await getCartProducts();
      setProducts(productCart);
    })();
  }, []);

  useEffect(() => {
    calculateProductValues();
  }, [calculateProductValues, products]);

  const handleDeleteProductFromCart = useCallback(() => {
    if (currentProductClicked.current) {
      removeProductFromCart(currentProductClicked.current);
      setProducts((prev) =>
        prev.filter((product) => product.id !== currentProductClicked.current),
      );
    }

    handleCloseConfirmDeleteModal();
  }, []);

  const handleClickDeleteProduct = (productId) => {
    currentProductClicked.current = productId;
    setIsConfirmDeleteModalOpen(true);
  };

  const handleCloseConfirmDeleteModal = () => {
    setIsConfirmDeleteModalOpen(false);
  };

  return (
    <div className="cart">
      {products.length > 0 && (
        <>
          <section className="products">
            <ul className="products-grid">
              {products.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  isCart
                  onDeleteProductFromCart={() =>
                    handleClickDeleteProduct(product.id)
                  }
                />
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
            <Link to={'/order/delivery'}>
              <button className="button">Iniciar pedido</button>
            </Link>
          </section>
        </>
      )}

      <ConfirmDelete
        isOpen={isConfirmDeleteModalOpen}
        onClose={handleCloseConfirmDeleteModal}
        onDelete={handleDeleteProductFromCart}
      />

      {products.length <= 0 && (
        <h2 className="no-products">
          Você ainda não adicionou nenhum produto ao carrinho
        </h2>
      )}
    </div>
  );
}
