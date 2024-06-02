import { baseUrl, brasilApiBaseUrl, serverBaseUrl } from '../constants/url';

export const getAllProductsEndpoint = (page) =>
  `${baseUrl}/products?page=${page}`;

export const cartEndpoint = () => `${serverBaseUrl}/cart`;

export const cartEndpointId = (id) => `${serverBaseUrl}/cart/${id}`;

export const getInforsByCepEndpoint = (cep) =>
  `${brasilApiBaseUrl}/cep/v1/${cep}`;
