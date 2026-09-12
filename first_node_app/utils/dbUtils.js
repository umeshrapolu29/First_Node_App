const db = require('../Config/db');

async function createRegistrationTable() {
	const query = `
		CREATE TABLE IF NOT EXISTS registration (
			empId INT AUTO_INCREMENT PRIMARY KEY,
			empName VARCHAR(100) NOT NULL,
			workEmail VARCHAR(150) NOT NULL,
			role VARCHAR(100) NOT NULL,
			salary DECIMAL(10, 2) NULL
		)
	`;
    console.log('Creating registration table if it does not exist...');
	await db.query(query);

	// Update tables created by the earlier version of this application.
	try {
		await db.query('ALTER TABLE registration ADD COLUMN workEmail VARCHAR(150) NOT NULL');
	} catch (error) {
		if (error.code !== 'ER_DUP_FIELDNAME') {
			throw error;
		}
	}

	await db.query('ALTER TABLE registration MODIFY salary DECIMAL(10, 2) NULL');
}

module.exports = {
	createRegistrationTable
};
