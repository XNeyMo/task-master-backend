import dotenv from 'dotenv';

dotenv.config();

export const config = {
	PORT: process.env.PORT || 3000,
	MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/express-mongo',
	SECRET: process.env.SECRET || 'secretkey',
	EXPIRES_IN: process.env.EXPIRES_IN || '1d',
}
