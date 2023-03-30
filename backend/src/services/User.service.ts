import md5 from 'md5';
import { IRegisterCredentials, IRegisterResponse } from '../interfaces/IRegister';
import { IUserRepository } from '../interfaces/repositories/UserRepository';
import { jwtGen } from '../utils/jwt';

export default class RegisterService {
	constructor(
    readonly userRepository: IUserRepository
	){}

	async register(user: IRegisterCredentials): Promise<IRegisterResponse | null> {
		// verifica se o usuário já existe
		const userExists = await this.userRepository.findUser(user);
		//  return { status: 409, message: 'User already registered' };
		if (userExists) return null;

		const { email } = user;

		const password = md5(user.password);
		const token = jwtGen({email});
    
		const createdUser = await this.userRepository.register({ ...user, token, password});
		return createdUser;
	}
}