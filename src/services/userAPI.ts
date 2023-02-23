import { IUser } from "../interfaces/IUser";

const saveUser = (user: IUser) => localStorage.setItem('user', JSON.stringify(user));

export const createUser = (user: IUser) => {
  const emptyUser = {
    name: '',
    email: '',
    image: '',
    description: ''
  }
  saveUser({...emptyUser, ...user});
  setTimeout(() => {
    return 'OK';
  }, 1500);
}