const db = require('./database');
const express = require('express');
const app = express();
const port = 3000;

app.get('/tasks', (req, res) => {
  const tasks = db.prepare('SELECT * FROM tasks').all();
  res.status(200).json({ tasks: tasks});
});

app.use(express.json());

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

