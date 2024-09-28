import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { config } from '../shared/config';

import { createToken } from '../utils/jwt';
import User from '../models/user';

export const login = async (req: Request, res: Response) => {
	const { email, password } = req.body;

	try {
		const userFound = await User.findOne({ email });
		if (!userFound) return res.status(400).json({ message: 'User not found' });

		const isMatch = await bcrypt.compare(password, userFound.password);
		if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

		const token = await createToken({ id: userFound._id });

		res.cookie('token', token, { partitioned: true, sameSite: 'none' });

		res.json({
			id: userFound._id,
			username: userFound.username,
			email: userFound.email
		});
	} catch (err) {
		res.status(500).json({ message: 'Error' });
	}
};

export const register = async (req: Request, res: Response) => {
	const { username, email, password } = req.body;

	try {
		const passwordHash = await bcrypt.hash(password, 10);

		const newUser = new User({
			username,
			email,
			password: passwordHash
		});

		const userSaved = await newUser.save();
		const token = await createToken({ id: userSaved._id });

		res.cookie('token', token)

		res.json({
			id: userSaved._id,
			username: userSaved.username,
			email: userSaved.email
		});
	} catch (err) {
		res.status(500).json({ message: 'Email has been previously registered' });
	}
};

export const logout = (req: Request, res: Response) => {
	res.cookie('token', '', { expires: new Date(0) });
	return res.sendStatus(200);
};

export const profile = async (req: Request, res: Response) => {
	const userFound = await User.findById(req.body.userId);
	if (!userFound) return res.status(400).json({ message: 'User not found' });

	res.json({
		id: userFound._id,
		username: userFound.username,
		email: userFound
	});
};

export const verify = async (req: Request, res: Response) => {
	const { token } = req.cookies;

	if (!token) return res.status(400).json({ message: 'Invalid token' });

	jwt.verify(token, config.SECRET, async (err: any, user: any) => {
		if (err) return res.status(400).json({ message: 'Invalid token' });

		const userFound = await User.findById(user.id);
		if (!userFound) return res.status(400).json({ message: 'User not found' });

		res.json({
			id: userFound._id,
			username: userFound.username,
			email: userFound.email
		});
	});
};
