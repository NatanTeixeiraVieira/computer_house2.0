import { cartEndpoint } from '../utils/endpoints';

export const getCartProducts = async () => {
  const response = await fetch(cartEndpoint());
  const json = await response.json();

  return json;
};

export const addProductToCart = async (product) => {
  const response = await fetch(cartEndpoint(), {
    method: 'POST',
    body: JSON.stringify(product),
  });

  return response;
};
