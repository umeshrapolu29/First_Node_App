console.log("Hello, World! This is my first Node.js application.");
var express = require('express');
var app = express();
var port = 3000;

app.get('/simpleApi', (req,res)=>{
    res.send("This is a simple API response.")
});
// Start the server
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});