let tasks = [];

// GET all tasks
const getAllTasks = (req, res) => {
  res.json(tasks);
};

// POST a new task
const createTask = (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.status(201).json(task);
};

// PATCH update a task
const updateTask = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const task = tasks.find(task => task.id === id);
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  task.status = status;
  res.json(task);
};

// DELETE a task
const deleteTask = (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(task => task.id !== id);
  res.json({ message: 'Task deleted successfully' });
};

module.exports = { getAllTasks, createTask, updateTask, deleteTask };
