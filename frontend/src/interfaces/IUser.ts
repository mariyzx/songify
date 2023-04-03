export interface IUser {
  email: string;
  password: string;
}

export interface ICreatedUser extends IUser {
  image: string;
  description: string;
}
