import { Request, Response } from 'express';

import Task from '../models/task';

export const getTasks = async (req: Request, res: Response) => {
	const tasks = await Task.find({ user: req.body.userId });
	res.json(tasks);
}

export const createTask = async (req: Request, res: Response) => {
	const { title, description, date } = req.body;

	const newTask = new Task({
		title,
		description,
		date,
		user: req.body.userId
	});

	const savedTask = await newTask.save();
	res.json(savedTask);
}

export const getTask = async (req: Request, res: Response) => {
	const task = await Task.findById(req.params.id);
	if (!task) return res.status(404).json({ message: 'Task not found' });
	res.json(task);
}

export const deleteTask = async (req: Request, res: Response) => {
	const task = await Task.findByIdAndDelete(req.params.id);
	if (!task) return res.status(404).json({ message: 'Task not found' });
	return res.sendStatus(204);
}

export const updateTask = async (req: Request, res: Response) => {
	const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
	if (!task) return res.status(404).json({ message: 'Task not found' });
	res.json(task);
}
