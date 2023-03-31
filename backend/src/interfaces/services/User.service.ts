import { ILoginCredentials, ILoginResponse } from '../ILogin';
import { IRegisterCredentials, IRegisterUser } from '../IRegister';

export interface IUserService {
  register(user: IRegisterCredentials): Promise<IRegisterUser | null> 
  login(user: ILoginCredentials): Promise<ILoginResponse | null>
}