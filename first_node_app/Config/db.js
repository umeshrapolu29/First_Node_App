require('dotenv').config();

const mysql = require('mysql2/promise');

const isProduction = process.env.NODE_ENV === 'production';
const dbHost = process.env.DB_HOST || (isProduction ? undefined : 'localhost');
const dbName = process.env.DB_NAME || 'first_node_app';

if (!dbHost) {
	throw new Error('DB_HOST is required in production. Configure the external MySQL host.');
}

if (dbName.toLowerCase() === 'information_schema') {
	throw new Error('DB_NAME must be a writable application database, not information_schema.');
}

const pool = mysql.createPool({
	host: dbHost,
	port: Number(process.env.DB_PORT || 3306),
	user: process.env.DB_USER || 'root',
	password: process.env.DB_PASSWORD,
	database: dbName,
	ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : undefined,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0
});

module.exports = pool;
