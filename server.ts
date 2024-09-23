import { Request, Response } from 'express';

import app from './shared/app';
import { connectDB } from './shared/db';
import { config } from './shared/config';

connectDB();

app.get('/', (req: Request, res: Response) => {
	res.send('Hello World');
});

app.listen(config.PORT, () => {
	console.log(`Server is running on port ${config.PORT}`);
})
