import { baseUrl, brasilApiBseUrl, serverBseUrl } from '../constants/url';

export const getAllProductsEndpoint = (page) => {
  return `${baseUrl}/products?page=${page}`;
};

export const cartEndpoint = () => {
  return `${serverBseUrl}/cart`;
};

export const getInforsByCepEndpoint = (cep) => {
  return `${brasilApiBseUrl}/cep/v1/${cep}`;
};
