import { IRegisterCredentials, IRegisterResponse } from '../IRegister';

export interface IUserRepository {
  register(data: IRegisterResponse): Promise<IRegisterResponse | null>
  findUser(data: IRegisterCredentials): Promise<IRegisterResponse | null>
}