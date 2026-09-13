require('dotenv').config();

const mysql = require('mysql2/promise');

const isProduction = process.env.NODE_ENV === 'production';
const dbHost = process.env.DB_HOST || (isProduction ? undefined : 'localhost');
const dbName = process.env.DB_NAME || (isProduction ? undefined : 'first_node_app');

if (!dbHost) {
	throw new Error('DB_HOST is required in production. Configure the external MySQL host.');
}

if (!dbName) {
	throw new Error('DB_NAME is required in production. Configure a writable application database.');
}
console.log(`DB_HOST: ${dbHost}, DB_NAME: ${dbName}`);
if (dbName.toLowerCase() === 'information_schema') {
	throw new Error('DB_NAME must be a writable application database, not information_schema.');
}

console.log(`Connecting to database: ${dbName} at host: ${dbHost}`);

const pool = mysql.createPool({
	host: 'bd0bexgjuwz55o2u7mkn-mysql.services.clever-cloud.com',
	port: Number(process.env.DB_PORT || 3306),
	user: 'uelxgeufv8m9spze',
	password: '4Q3HDKkUUcFxWL4YcJgH',
	database: 'first_node_app',
	ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : undefined,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0
});
console.log(pool, "uuuuu")
module.exports = pool;
