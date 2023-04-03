import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

export const validateRegister = async (req: Request, res: Response, next: NextFunction) => {
	const schema = Joi.object({
		email:  Joi.string().email().required(),
		name: Joi.string().min(1).required(),
		password: Joi.string().min(4).required(),
	});
  
	const { error } = schema.validate(req.body);
	if (error) res.status(400).json({message: error.details[0].message});

	next();
};

export const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
	const schema = Joi.object({
		email:  Joi.string().email().required(),
		password: Joi.string().min(4).required(),
	});
  
	const { error } = schema.validate(req.body);
	if (error) res.status(400).json({message: error.details[0].message});

	next();
};

export const validateFavSongs  = async (req: Request, res: Response, next: NextFunction) => {
	const schema = Joi.object({
		user: Joi.object({
			email: Joi.string().email().required()
		}),
		songs: Joi.array().items(
			Joi.object({
				id: Joi.number().min(1).required(),
				title: Joi.string().min(1).required(),
				artist: Joi.string().min(1).required(),
				album: Joi.string().min(1).required(),
			})
		)
	});
  
	const { error } = schema.validate(req.body);
	if (error) res.status(400).json({message: error.details[0].message});

	next();
};
