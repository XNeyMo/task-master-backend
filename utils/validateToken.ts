import { Request, Response, NextFunction } from 'express';

import jwt from 'jsonwebtoken';
import { config } from '../shared/config';

export const authRequired = (req: Request, res: Response, next: NextFunction) => {
	const { token } = req.cookies;
	if (!token) return res.status(401).json({ message: 'Unauthorized' });

	jwt.verify(token, config.SECRET, (err, user) => {
		if (err) return res.status(401).json({ message: 'Unauthorized' });

		req.user = user;
		next();
	})
}
