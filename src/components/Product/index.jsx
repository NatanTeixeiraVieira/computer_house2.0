import { StarRate } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { addProductToCart } from '../../services/cart';
import { formatCurrency } from '../../utils/format';
import DeleteIcon from '@mui/icons-material/Delete';
import './styles.css';

export default function Product({ product, isCart, onDeleteProductFromCart }) {
  return (
    <li className="product">
      <Link
        className="link-buy-product"
        onClick={() => (!isCart ? addProductToCart(product) : null)}
      >
        {isCart && (
          <div className="trash-container" onClick={onDeleteProductFromCart}>
            <DeleteIcon />
          </div>
        )}
        <div className="produt-image-container">
          <img
            src={product.image}
            alt={`Imagem do ${product.title}`}
            className="product-image"
          />
        </div>
        <div className="product-description">
          <span>{product.title}</span>
          <strong>{formatCurrency(product.price)}</strong>
          <div className="rating">
            <StarRate />
            <span>{product.rating.rate}</span>
          </div>
        </div>
      </Link>
    </li>
  );
}
