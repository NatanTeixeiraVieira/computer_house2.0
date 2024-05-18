import { baseUrl, serverBseUrl } from '../constants/url';

export const getAllProductsEndpoint = (page) => {
  return `${baseUrl}/products?page=${page}`;
};

export const cartEndpoint = () => {
  return `${serverBseUrl}/cart`;
};
