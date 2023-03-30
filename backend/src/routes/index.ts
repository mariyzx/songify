import { Router } from 'express';
import { CreateUserControllerFactory } from '../factories/UserControllerFactory';
import validateRegister from '../middlewares/validators';

const router = Router();
const registerController = CreateUserControllerFactory.make();

router.post('/register', validateRegister, (req, res) => registerController.register(req, res));

export default router;