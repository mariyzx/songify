import { IUser, ICreatedUser } from "./IUser";

export interface IContext {
  createUser(data: IUser): ICreatedUser
}