import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import authRouter from '../routes/authRoutes';
import taskRouter from '../routes/taskRoutes';

const app = express();
app.use(cookieParser());
app.use(express.json());

app.use(cors({
	origin: 'http://localhost:5173',
	credentials: true
}));
app.use(authRouter);
app.use(taskRouter);

export default app
