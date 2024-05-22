import { getInforsByCepEndpoint } from '../utils/endpoints';

export const getInfosByCep = async (cep) => {
  const response = await fetch(getInforsByCepEndpoint(cep));
  const responseJson = await response.json();
  return responseJson;
};
