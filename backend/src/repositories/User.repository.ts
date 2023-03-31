import { ILoginCredentials } from '../interfaces/ILogin';
import { IRegisterCredentials, IRegisterUser } from '../interfaces/IRegister';
import { IUserRepository } from '../interfaces/repositories/UserRepository';
import Prisma from '../model';

export class UserRepository implements IUserRepository {
	async register(data: IRegisterCredentials): Promise<IRegisterUser | null> {
		return (await Prisma.user.create({
			data: {
				email: data.email,
				password: data.password,
				name: data.name,
			}
		}));
	}

	async findUser(data: ILoginCredentials): Promise<IRegisterUser | null> {
		return (await Prisma.user.findUnique({
			where: {
				email: data.email
			}
		}));
	}
}