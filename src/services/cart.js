import { cartEndpoint, cartEndpointId } from '../utils/endpoints';

export const getCartProducts = async () => {
  const response = await fetch(cartEndpoint());
  const json = await response.json();

  return json;
};

export const addProductToCart = async (product) => {
  const productsResponse = await fetch(cartEndpoint());
  const products = await productsResponse.json();

  const isItemInCart = products.some((item) => item.id === product.id);

  if (!isItemInCart) {
    const response = await fetch(cartEndpoint(), {
      method: 'POST',
      body: JSON.stringify(product),
    });

    return response;
  }
};

export const removeProductFromCart = async (productId) => {
  console.log('🚀 ~ removeProductFromCart ~ productId:', productId);
  const response = await fetch(cartEndpointId(productId), { method: 'DELETE' });
  return response;
};
