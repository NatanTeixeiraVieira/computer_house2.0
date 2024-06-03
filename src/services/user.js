import { userEndpoint, userEndpointId } from '../utils/endpoints';

export const getUser = async (userId) => {
  const response = await fetch(userEndpointId(userId));
  const json = await response.json();
  return json;
};

export const saveUser = async (user) => {
  const response = await fetch(userEndpoint(), {
    method: 'POST',
    body: JSON.stringify(user),
  });

  const json = await response.json();

  return {
    user: json,
    token: json.id,
  };
};
