import { IRegisterCredentials, IRegisterResponse } from '../IRegister';

export interface IRegisterRepository {
  register(data: IRegisterResponse): Promise<IRegisterResponse | null>
  findUser(data: IRegisterCredentials): Promise<IRegisterResponse | null>
}