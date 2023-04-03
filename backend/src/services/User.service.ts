import md5 from 'md5';
import { ILoginCredentials, ILoginResponse } from '../interfaces/ILogin';
import { IRegisterCredentials, IRegisterUser } from '../interfaces/IRegister';
import { IUserRepository } from '../interfaces/repositories/UserRepository';
import { jwtGen } from '../utils/jwt';
import { IFavoriteSongsParam } from '../interfaces/IFavoriteSongs';

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

	
	async login(user: ILoginCredentials): Promise<ILoginResponse | null> {
		const userExists = await this.userRepository.findUser(user);
		const { email, password } = user;
		const pass = md5(password);

		if (!userExists || pass !== userExists.password) return null;

		const { password: _, ...userWithoutPass} = userExists;
		const token = jwtGen({ email });

		return { ...userWithoutPass, token };
	}

	async addToFav(data: IFavoriteSongsParam) {
		// user precisa existr
		const fav = await this.userRepository.addToFav(data);

		return fav;
	}
}