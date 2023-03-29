import RegisterController from '../controllers/Register.controller';
import { RegisterRepository } from '../repositories/Register.repository';
import RegisterService from '../services/Register.service';

export class CreateRegisterControllerFactory {
	static make() {
		const repository = new RegisterRepository;
		const service = new RegisterService(repository);
		const controller = new RegisterController(service);

		return controller;
	}
}