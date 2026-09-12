const express = require('express');
const db = require('../Config/db');
const { createRegistrationTable } = require('../utils/dbUtils');

const router = express.Router();

router.post('/register', async (req, res) => {
	const { fullName, workEmail, empId, role } = req.body;
   

	if (!fullName || !workEmail || !empId || !role) {
		return res.status(400).json({
			error: 'fullName, workEmail, empId, and role are required'
		});
	}

	try {
		await createRegistrationTable();
        console.log('Received registration data:', { fullName, workEmail, empId, role });
		const query = `
			INSERT INTO registration (empId, empName, workEmail, role)
			VALUES (?, ?, ?, ?)
		`;
		const [findQuery] = await db.query('SELECT * FROM registration WHERE workEmail = ?', [workEmail]);
		console.log('Find query result:', findQuery);
		if (findQuery.length > 0) {
			return res.status(400).json({
				error: 'Employee with this work email already exists'
			});
		}
		else{
			await db.query(query, [empId, fullName, workEmail, role]);

		res.status(201).json({
			message: 'Employee registered successfully'
		});
		}
		
	} catch (error) {
		console.error('Registration failed:', error.message);
		res.status(500).json({ error: 'Unable to register employee' });
	}
});

module.exports = router;