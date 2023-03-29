import { Request, Response } from 'express';
import { IRegisterService } from '../interfaces/services/IRegister.service';

export default class RegisterController {
	constructor(private registerService: IRegisterService) {}

	async register(req: Request, res:Response) {
		const { email, password, name } = req.body;

		const user = await this.registerService.register({ email, password, name });

		return res.status(201).json(user);
	}
}