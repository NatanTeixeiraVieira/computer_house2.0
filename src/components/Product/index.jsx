import { FavoriteBorder, StarRate } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { addProductToCart } from '../../services/cart';
import { formatCurrency } from '../../utils/format';
import './styles.css';

export default function Product({ product }) {
  return (
    <li className="product">
      <Link
        // to={`/order/delivery/${product.id}`}
        to={``}
        className="link-buy-product"
        onClick={() => addProductToCart(product)}
      >
        <div className="produt-image-container">
          <img
            src={product.image}
            alt={`Imagem do ${product.title}`}
            className="product-image"
          />
          {/* <div className="favorite-container">
            <FavoriteBorder />
          </div> */}
          {/* <FavoriteIcon /> */}
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
