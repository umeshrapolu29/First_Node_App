var express = require('express');
var cors = require('cors');
var db = require('../Config/db');

var router = express.Router()
router.post('/login', async (req, res) => {
    const { empId, workEmail } = req.body;
    console.log('Received login data:', { empId, workEmail });
    try {
         const [rows] = await db.query('SELECT * FROM registration WHERE empId = ? AND workEmail = ?', [empId, workEmail]);
         console.log('Login query result:', rows);

         if (rows.length > 0) {
             res.status(200).json({ message: 'Login successful', data: rows[0] });
         } else {
             res.status(401).json({ message: 'Invalid employee ID or work email' });
         }
    }
    catch (error) {
        res.status(500).json({ error: 'Unable to login', message: error.message })
    }
    })
    module.exports = router;