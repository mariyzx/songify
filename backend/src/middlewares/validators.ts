import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { jwtVerify } from '../utils/jwt';

interface AuthenticatedRequest extends Request {
  user?: any;
}

export const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
	const token = req.header('Authorization');

	if (!token) {
		return res.status(401).send({ message: 'Token not found' });
	}

	try {
		const decoded = jwtVerify(token);

		req.user = decoded;

		const { email } = req.body.user;
	
		if (email !== req.user.email) {
			return res.status(401).send({ message: 'Error while trying to validate token' });
		}

		next();
	} catch (error) {
		return res.status(401).send({ message: 'Invalid token' });
	}
};

export const validateRegister = async (req: Request, res: Response, next: NextFunction) => {
	const schema = Joi.object({
		email:  Joi.string().email().required(),
		name: Joi.string().min(1).required(),
		password: Joi.string().min(4).required(),
	});
  
	const { error } = schema.validate(req.body);
	if (error) return res.status(401).json({message: error.details[0].message});

	next();
};

export const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
	const schema = Joi.object({
		email:  Joi.string().email().required(),
		password: Joi.string().min(4).required(),
	});
  
	const { error } = schema.validate(req.body);
	if (error) return res.status(401).json({message: error.details[0].message});

	next();
};

export const validateFavSongs  = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
	const schema = Joi.object({
		user: Joi.object({
			email: Joi.string().email().required()
		}),
		songs: Joi.array().items(
			Joi.object({
				id: Joi.number(),
				title: Joi.string().min(1).required(),
				artist: Joi.string().min(1).required(),
				album: Joi.string().min(1).required(),
				previewUrl: Joi.string().min(1).required()
			})
		)
	});
  
	const { error } = schema.validate(req.body);
	if (error) return res.status(401).json({message: error.details[0].message});

	next();
};

export const validateUpdate  = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
	const schema = Joi.object({
		user: Joi.object({
			email: Joi.string().email().min(1).required(),
			name: Joi.string().min(1),
			description: Joi.string().min(1)
		})
	});
  
	const { error } = schema.validate(req.body);
	if (error) return res.status(401).json({message: error.details[0].message});

	next();
};