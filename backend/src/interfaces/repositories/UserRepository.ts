import { ILoginCredentials } from '../ILogin';
import { IRegisterCredentials, IRegisterUser } from '../IRegister';

export interface IUserRepository {
  register(data: IRegisterCredentials): Promise<IRegisterUser | null>
  findUser(data: ILoginCredentials): Promise<IRegisterUser | null>
}