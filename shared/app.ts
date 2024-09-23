import express from 'express';
import cors from 'cors';

import authRouter from '../routes/authRoutes';
import taskRouter from '../routes/taskRoutes';

const app = express();
app.use(express.json());

app.use(cors({
	origin: 'http://localhost:3000',
}));
app.use(authRouter);
app.use(taskRouter);

export default app
