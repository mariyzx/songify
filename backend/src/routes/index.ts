import { Router } from 'express';
import { CreateRegisterControllerFactory } from '../factories/RegisterControllerFactory';

const router = Router();
const registerController = CreateRegisterControllerFactory.make();

router.post('/register', (req, res) => registerController.register(req, res));

export default router;