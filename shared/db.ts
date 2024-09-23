import mongoose from 'mongoose';
import { config } from './config';

export const connectDB = async () => {
	try {
		await mongoose.connect(config.MONGO_URI);
		console.log('MongoDB connection success');
	} catch (error) {
		console.log('MongoDB connection failed');
	}
}
