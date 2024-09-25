import { Router } from 'express';
import { getTasks, createTask, getTask, updateTask, deleteTask } from '../controllers/taskController';
import { authRequired } from '../utils/validateToken';

const taskRoute = Router();

taskRoute.get('/tasks', authRequired, getTasks);
taskRoute.post('/tasks', authRequired, createTask);
taskRoute.delete('/tasks/:id', authRequired, deleteTask);
taskRoute.get('/tasks/:id', authRequired, getTask);
taskRoute.put('/tasks/:id', authRequired, updateTask);

export default taskRoute;
