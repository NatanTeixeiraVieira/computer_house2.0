import { getInforsByCepEndpoint } from '../utils/endpoints';

export const getInfosByCep = async (cep) => {
  const response = await fetch(getInforsByCepEndpoint(cep));
  return response;
};
