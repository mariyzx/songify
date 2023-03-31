import { Router } from 'express';
import { CreateUserControllerFactory } from '../factories/UserControllerFactory';
import validateRegister from '../middlewares/validators';

const router = Router();
const userController = CreateUserControllerFactory.make();

router.post('/register', validateRegister, (req, res) => userController.register(req, res));
router.post('/login', (req, res) => userController.login(req, res));

export default router;