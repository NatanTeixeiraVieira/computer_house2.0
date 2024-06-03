import { useEffect } from 'react';
import { getAllProducts } from '../services/products';
import { generateDiscount } from '../utils/product';
import { formatCurrency } from '../utils/format';

export const useFallback = (setProducts) => {
  useEffect(() => {
    localStorage.removeItem('shouldRedirect');
    const getProducts = async () => {
      const response = await getAllProducts();
      const json = await response.json();

      const productWithDiscount = json.map(async (product, index) => {
        product.id = product.id.toString();
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

      const productDiscount = await Promise.all(productWithDiscount);

      setProducts(productDiscount);
    };

    getProducts();
  }, [setProducts]);
};
