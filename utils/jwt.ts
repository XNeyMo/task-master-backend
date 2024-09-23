import { config } from '../shared/config';

import jwt from 'jsonwebtoken';

export function createToken(payload: any) {
	return new Promise((resolve, reject) => {
		jwt.sign(
			payload,
			config.SECRET,
			{ expiresIn: config.EXPIRES_IN },
			(err, token) => {
				if (err) reject(err);
				resolve(token);
			}
		)
	})
}
