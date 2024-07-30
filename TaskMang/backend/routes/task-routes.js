import express from 'express';
import auth from '../middleware/auth.js';
import { createTask } from '../controller/createTask.js';
import { getAllTasks } from '../controller/getAllTasks.js';
import { getTasksByUserId } from '../controller/getTasksByUserId.js';
import { deleteTask } from '../controller/deleteTask.js';
import { editTask } from '../controller/editTask.js';
import { getImportantTasks } from '../controller/getImportantTask.js';
import { getCompletedTasks } from '../controller/getCompletedTask.js';
import { updateCompletedTask } from '../controller/updateCompletedTask.js';
import { updateIncompleteTask } from '../controller/updateIncompleteTask.js';
import { updateImportantTask } from '../controller/updateImportantTask.js';

const router = express.Router();

router.post('/createtask', auth, createTask);
router.get('/getalltask', auth, getAllTasks);
router.get('/importanttask', auth, getImportantTasks);
router.get('/completedtask', auth, getCompletedTasks);
router.get('/gettaskbyuserid/:userId', auth, getTasksByUserId)
router.patch('/:taskId/completed', auth, updateCompletedTask);
router.patch('/:taskId/important', auth, updateImportantTask);
router.patch('/:taskId/incomplete', auth, updateIncompleteTask);
router.delete('/deletetask/:taskId', auth, deleteTask);
router.put('/edittask/:taskId', auth, editTask);


export default router;

