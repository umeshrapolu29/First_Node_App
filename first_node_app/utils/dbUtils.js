const db = require('../Config/db');

async function createRegistrationTable() {
	const query = `
		CREATE TABLE IF NOT EXISTS registration (
			empId INT AUTO_INCREMENT PRIMARY KEY,
			empName VARCHAR(100) NOT NULL,
			role VARCHAR(100) NOT NULL,
			salary DECIMAL(10, 2) NOT NULL
		)
	`;

	await db.query(query);
}

module.exports = {
	createRegistrationTable
};
