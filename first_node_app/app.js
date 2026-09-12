console.log("Hello, World! This is my first Node.js application.");
var express = require('express');
var cors = require('cors');
var db = require('./Config/db');
var { createRegistrationTable } = require('./utils/dbUtils');
var app = express();
var port = 3000;

app.use(cors());

app.get('/simpleApi', (req,res)=>{
    res.send("This is a simple APIsss response.")
});

app.get('/db-status', async (req, res) => {
    try {
        await db.query('SELECT 1');
        res.json({ status: 'connected' });
    } catch (error) {
        res.status(503).json({ status: 'disconnected' });
    }
});

// Start the server
app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);

    try {
        await db.query('SELECT 1');
        console.log('Database connected successfully');
        await createRegistrationTable();
        console.log('Registration table is ready');
    } catch (error) {
        console.error('Database setup failed:', error.message);
    }
});