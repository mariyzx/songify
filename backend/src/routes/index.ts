import { Router } from 'express';
import { CreateRegisterControllerFactory } from '../factories/RegisterControllerFactory';
import validateRegister from '../utils/validators';

const router = Router();
const registerController = CreateRegisterControllerFactory.make();

router.post('/register', validateRegister, (req, res) => registerController.register(req, res));

export default router;