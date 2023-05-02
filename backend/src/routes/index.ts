import { Router } from 'express';
import { CreateUserControllerFactory } from '../factories/UserControllerFactory';
import { validateRegister, validateLogin, validateFavSongs, authMiddleware, validateUpdate } from '../middlewares/validators';
import * as doc from '../swagger.json';
import * as swaggerUI from 'swagger-ui-express';

const router = Router();
const userController = CreateUserControllerFactory.make();

router.use('/docs', swaggerUI.serve, swaggerUI.setup(doc));
router.post('/register', validateRegister, (req, res) => userController.register(req, res));
router.post('/login', validateLogin, (req, res) => userController.login(req, res));
router.patch('/favorite', validateFavSongs, authMiddleware, (req, res) => userController.addToFav(req, res));
router.get('/favorite', (req, res) => userController.getSongs(req, res));
router.delete('/favorite', validateFavSongs, authMiddleware,
	(req, res) => userController.removeSong(req, res));
router.patch('/user', validateUpdate, authMiddleware, (req, res) => userController.updateUser(req, res));

export default router;