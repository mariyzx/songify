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

	async login(req: Request, res: Response) {
		const { email, password } = req.body;

		const user = await this.userService.login({ email, password });

		if (!user) return res.status(400).json({ message: 'User not found!' });

		return res.status(200).json(user);
	}

	async addToFav(req: Request, res: Response) {
		const fav = await this.userService.addToFav(req.body);
		
		if (!fav) return res.status(400).json({ message: 'User not found!' });

		return res.status(201).json(fav);
	}

	async getSongs(req: Request, res: Response) {
		const { email } = req.query;

		if (!email) return res.status(400).json({ message: 'Empty fields'});

		const favs = await this.userService.getSongs(email as string);

		if (!favs) return res.status(400).json({ message: 'User not found!'});

		return res.status(200).json(favs);
	}
 
	async removeSong(req: Request, res: Response) {
		const rmv = await this.userService.removeToFav(req.body);

		if (!rmv) return res.status(400).json({ message: 'User not found!' });

		return res.status(201).json(rmv);
	}
}