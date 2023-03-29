import { IRegisterCredentials, IRegisterResponse } from '../IRegister';

export interface IRegisterService {
  register(user: IRegisterCredentials): Promise<IRegisterResponse | null> 
}