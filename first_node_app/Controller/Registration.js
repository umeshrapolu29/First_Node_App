const express = require('express');
const db = require('../Config/db');
const { createRegistrationTable } = require('../utils/dbUtils');
const { sendRegistrationEmail } = require('../utils/mailer');

const router = express.Router();

router.get('/registrations', async (req, res) => {
	try {
		const [rows] = await db.query('SELECT * FROM registration ORDER BY empId');
		res.status(200).json(rows);
	} catch (error) {
		console.error('Fetching registrations failed:', error.message);
		res.status(500).json({ error: 'Unable to fetch registrations' });
	}
});

router.post('/register', async (req, res) => {
	const { fullName, workEmail, empId, role } = req.body;
   

	if (!fullName || !workEmail || !empId || !role) {
		return res.status(400).json({
			error: 'fullName, workEmail, empId, and role are required'
		});
	}

	try {
		await createRegistrationTable();
        console.log('Received registration data is:', { fullName, workEmail, empId, role });
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
			let emailSent = true;

			try {
				await sendRegistrationEmail({ fullName, workEmail, empId, role });
			} catch (emailError) {
				emailSent = false;
				console.error('Registration email failed:', emailError.message);
			}

		res.status(201).json({
			message: 'Employee registered successfully',
			emailSent
		});
		}
		
	} catch (error) {
		console.error('Registration failed:', {
			message: error.message,
			code: error.code,
			errno: error.errno,
			sqlState: error.sqlState
		});
		res.status(500).json({ error: 'Unable to register employee' });
	}
});

module.exports = router;