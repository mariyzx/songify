import { Request, Response } from 'express';
import Joi from 'joi';

const validateRegister = async (req: Request, res: Response) => {
	const schema = Joi.object({
		email:  Joi.string().email().required(),
		name: Joi.string().min(1).required(),
		password: Joi.string().min(4).required(),
	});
  
	const { error } = schema.validate(req.body);
	if (error) res.status(400).json({message: error.details[0].message});
};

export default validateRegister;
