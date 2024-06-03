import { orderEndpoint } from '../utils/endpoints';

export const saveOrder = async (order) => {
  const body = JSON.stringify(order);

  const reponse = await fetch(orderEndpoint(), {
    method: 'POST',
    body,
  });

  return reponse;
};
