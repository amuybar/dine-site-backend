const sqlite3 = require('sqlite3').verbose();

// Connect to SQLite database
const db = new sqlite3.Database('newsletter.db'); // Database file stored on disk

// Create email and orders table if not exists
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS emails (email TEXT PRIMARY KEY)");
  db.run(`CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY,
    name TEXT,
    price REAL,
    description TEXT,
    email TEXT
  )`);
});

module.exports = db;
