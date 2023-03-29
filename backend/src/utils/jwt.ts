import * as jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'my_secret';

const jwtGen = (data: object) => jwt.sign({...data}, SECRET, { expiresIn: '1d'});

export { jwtGen };