import { IRegisterResponse, IRegisterCredentials } from '../interfaces/IRegister';
import { IRegisterRepository } from '../interfaces/repositories/IRegisterRepository';
import Prisma from '../model';

export class RegisterRepository implements IRegisterRepository {
	async register(data: IRegisterResponse): Promise<IRegisterResponse | null> {
		return (await Prisma.user.create({
			data: {
				email: data.email,
				password: data.password,
				name: data.name,
				token: data.token,
			}
		}));
	}

	async findUser(data: IRegisterCredentials): Promise<IRegisterResponse | null> {
		return (await Prisma.user.findUnique({
			where: {
				email: data.email
			}
		}));
	}
}