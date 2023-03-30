import { IRegisterCredentials, IRegisterResponse } from '../IRegister';

export interface IUserService {
  register(user: IRegisterCredentials): Promise<IRegisterResponse | null> 
}