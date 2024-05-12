import { baseUrl } from '../constants/url';

export const getAllProductsEndpoint = (page) => {
  return `${baseUrl}/products?page=${page}`;
};
