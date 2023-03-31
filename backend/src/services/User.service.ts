import md5 from 'md5';
import { IRegisterCredentials, IRegisterUser } from '../interfaces/IRegister';
import { IUserRepository } from '../interfaces/repositories/UserRepository';

export default class RegisterService {
	constructor(
    readonly userRepository: IUserRepository
	){}

	async register(user: IRegisterCredentials): Promise<IRegisterUser | null> {
		// verifica se o usuário já existe
		const userExists = await this.userRepository.findUser(user);
		//  return { status: 409, message: 'User already registered' };
		if (userExists) return null;

		const password = md5(user.password);
    
		const createdUser = await this.userRepository.register({ ...user, password});
		return createdUser;
	}
}