import { Request, Response } from 'express';
import { IUserService } from '../interfaces/services/User.service';

export default class RegisterController {
	constructor(private userService: IUserService) {}

	async register(req: Request, res:Response) {
		const { email, password, name } = req.body;

		const user = await this.userService.register({ email, password, name });

		if (!user) return res.status(400).json({ message: 'User already exists!'});

		return res.status(201).json(user);
	}
}