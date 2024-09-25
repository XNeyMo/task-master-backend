import { Router } from 'express';
import { login, register, logout, profile, verify } from '../controllers/authController';
import { authRequired } from '../utils/validateToken';

const authRoute = Router();

authRoute.post('/login', login);
authRoute.post('/register', register);
authRoute.post('/logout', logout);

authRoute.get('/verify', verify);
authRoute.get('/profile', authRequired, profile);

export default authRoute;
