// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/tasks', taskRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the task manager backend!');
});

const PORT = process.env.PORT || 8000;


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
