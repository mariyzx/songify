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

export interface IUpdatedUser {
  user: {
    email: string;
    name: string;
    image: string;
    description: string;
  };
}

export interface ILogin {
  status: string;
}
