const Database = require("better-sqlite3");
const db = new Database("/tmp/tasks.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      status TEXT NOT NULL DEFAULT 'pending' CHECK(status IN ('pending', 'completed'))
    )
`);

db.exec(`
  INSERT INTO tasks (title, description, status)
  VALUES
  ('Do projects', 'Do homework', 'pending'),
  ('Write', 'Paint', 'completed'),
  ('Attend school', 'work', 'pending')

`);

module.exports = db;
