import RegisterController from '../controllers/User.controller';
import { UserRepository } from '../repositories/User.repository';
import RegisterService from '../services/User.service';

export class CreateUserControllerFactory {
	static make() {
		const repository = new UserRepository;
		const service = new RegisterService(repository);
		const controller = new RegisterController(service);

		return controller;
	}
}