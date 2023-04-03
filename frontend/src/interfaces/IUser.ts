export interface IUser {
  email: string;
  password: string;
}

export interface ICreatedUser extends Omit<IUser, 'password'> {
  image: string;
  description: string;
}
