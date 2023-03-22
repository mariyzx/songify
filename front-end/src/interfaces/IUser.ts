export interface IUser {
  email: string;
  name: string;
}

export interface ICreatedUser extends IUser {
  image: string;
  description: string;
}
