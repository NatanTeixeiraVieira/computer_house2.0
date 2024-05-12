import { useState } from 'react';
import './styles.css';
import { useEffect } from 'react';
import { getAllProductsPaged } from '../../services/products';
import { formatCurrency } from '../../utils/format';
import { FavoriteBorder, StarRate } from '@mui/icons-material';
import { generateDiscount } from '../../utils/product';
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await getAllProductsPaged();
      const json = await response.json();

      const productWithDiscount = json.map((product, index) => {
        const discount = generateDiscount(product.price);
        return {
          ...product,
          price: formatCurrency(product.price),
          priceDiscount:
            discount !== 1 && index % 2 === 0
              ? formatCurrency(+discount)
              : null,
        };
      });

      setProducts(productWithDiscount);
    };

    getProducts();
  }, []);

  return (
    <div className="home">
      <section>
        <Carousel id="carousel" className="d-flex">
          {products.map(
            (product) =>
              product.priceDiscount && (
                <Carousel.Item key={product.id} className="item">
                  <a href="identification.html" className="image-container">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="product-image"
                    />
                    <span className="product-name">{product.title}</span>
                    <span>
                      <strong className="previous-price">
                        {product.price}
                      </strong>
                    </span>
                    <span>
                      <strong className="current-price">
                        {product.priceDiscount}
                      </strong>
                    </span>
                  </a>
                </Carousel.Item>
              ),
          )}
        </Carousel>
      </section>
      <section className="products">
        <ul className="products-grid">
          {products.map((product) => (
            <li key={product.id} className="product">
              <a href="identification.html" className="link-buy-product">
                <div className="produt-image-container">
                  <img
                    src={product.image}
                    alt={`Imagem do ${product.title}`}
                    className="product-image"
                  />
                  <div className="favorite-container">
                    <FavoriteBorder />
                    {/* <FavoriteIcon /> */}
                  </div>
                </div>
                <div className="product-description">
                  <span>{product.title}</span>
                  <strong>{formatCurrency(product.price)}</strong>
                  <div className="rating">
                    <StarRate />
                    <span>{product.rating.rate}</span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
