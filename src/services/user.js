import { userEndpoint } from '../utils/endpoints';

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
