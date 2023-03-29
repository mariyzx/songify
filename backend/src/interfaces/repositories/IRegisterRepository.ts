import { IRegisterResponse, IRegisterUser } from '../IRegister';

export interface IRegisterRepository {
  register(data: IRegisterUser): Promise<IRegisterResponse | null>
}