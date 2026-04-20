import Database from 'better-sqlite3';

// Initialize the database
const db = new Database('playerScores.db', { verbose: console.log });

// Create a table for storing player scores
const createTableQuery = `
CREATE TABLE IF NOT EXISTS scores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    playerName TEXT NOT NULL,
    score INTEGER NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

db.exec(createTableQuery);

export default db;