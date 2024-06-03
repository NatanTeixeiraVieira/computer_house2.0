import { useState, useEffect } from 'react';
import './styles.css';
import { getAllProducts } from '../../services/products';
import { formatCurrency } from '../../utils/format';
import { generateDiscount } from '../../utils/product';
import Carousel from 'react-bootstrap/Carousel';
import Product from '../../components/Product';
import { addProductToCart } from '../../services/cart';
import { getToken } from '../../utils/auth';
import { translateText } from '../../services/translate';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    localStorage.removeItem('shouldRedirect');
    const getProducts = async () => {
      const response = await getAllProducts();
      const json = await response.json();

      const productWithDiscount = json.map(async (product, index) => {
        product.id = product.id.toString();
        const discount = generateDiscount(product.price);
        const [title, description, category] = await Promise.all([
          translateText(product.title),
          translateText(product.description),
          translateText(product.category),
        ]);

        return {
          ...product,
          title,
          description,
          category,
          price: formatCurrency(product.price),
          priceDiscount:
            discount !== 1 && index % 2 === 0
              ? formatCurrency(+discount)
              : null,
        };
      });

      const productDiscount = await Promise.all(productWithDiscount);

      setProducts(productDiscount);
    };

    getProducts();
  }, []);

  // useFallback(setProducts);

  const isAuthenticated = !!getToken();

  return (
    <div className="home">
      <section>
        <Carousel id="carousel" className="d-flex">
          {products.map(
            (product) =>
              product.priceDiscount && (
                <Carousel.Item key={product.id} className="item">
                  <div
                    className="image-container"
                    onClick={() =>
                      isAuthenticated ? addProductToCart(product) : null
                    }
                  >
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
                  </div>
                </Carousel.Item>
              ),
          )}
        </Carousel>
      </section>
      <section className="products">
        <ul className="products-grid">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ul>
      </section>
    </div>
  );
}
