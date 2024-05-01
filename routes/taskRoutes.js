const express = require('express');
const router = express.Router();
const { getAllTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');

// GET all tasks
router.get('/', getAllTasks);

// POST a new task
router.post('/', createTask);

// PATCH update a task
router.patch('/:id', updateTask);

// DELETE a task
router.delete('/:id', deleteTask);

module.exports = router;
