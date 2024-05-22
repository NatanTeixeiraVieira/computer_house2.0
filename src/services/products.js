import { getAllProductsEndpoint } from '../utils/endpoints';

export const getAllProductsPaged = async (page) => {
  const products = await fetch(getAllProductsEndpoint(page));
  return products;
};
