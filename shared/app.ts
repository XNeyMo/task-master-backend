import express from 'express';

import authRouter from '../routes/authRoutes';
import taskRouter from '../routes/taskRoutes';

const app = express();
app.use(express.json());

app.use(authRouter);
app.use(taskRouter);

export default app
