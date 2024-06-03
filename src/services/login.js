import { getAllUsers } from './user';

export const login = async (email, password) => {
  const users = await getAllUsers();
  const userLogged = users.find(
    (user) => user.email === email && user.password === password,
  );

  if (userLogged) {
    localStorage.setItem('token', JSON.stringify(userLogged.id));
    return userLogged;
  }

  return null;
};
