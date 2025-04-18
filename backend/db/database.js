const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./tasks.db', (err) => {
    if (err) {
        console.error('Error opening database: ', err.message);
    } else {
        console.log('Connected to SQLite');
        db.run(`
            CREATE TABLE IF NOT EXISTS tasks (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                comments TEXT,
                completed BOOLEAN NOT NULL
            )
        `);
    }
});

module.exports = db;
