const mysql = require('mysql2/promise');

require('dotenv').config();
const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 100,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
});

module.exports = connection;
