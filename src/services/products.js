import { getAllProductsEndpoint } from '../utils/endpoints';

export const getAllProducts = async (page) => {
  const products = await fetch(getAllProductsEndpoint(page));
  return products;
};
