export interface IUser {
  email: string;
  password: string;
}

export interface ICreatedUser extends Omit<IUser, 'password'> {
  name: string;
  image: string;
  description: string;
  token: string;
}

export interface ILogin {
  status: string;
}
