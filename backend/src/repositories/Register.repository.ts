import { IRegisterUser, IRegisterResponse } from '../interfaces/IRegister';
import { IRegisterRepository } from '../interfaces/repositories/IRegisterRepository';
import Prisma from '../model';

export class RegisterRepository implements IRegisterRepository {
	async register(data: IRegisterUser): Promise<IRegisterResponse | null> {
		return (await Prisma.user.create({
			data: {
				email: data.email,
				password: data.password,
				name: data.name,
				token: data.token,
			}
		}));
	}
}