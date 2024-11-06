//const express = require('express');
import express from 'express';
const app = express();

const hostname = 'localhost';
const port = 3310;

app.get('/', function (req, res) {  // Changed 'rep' to 'req'
    res.send('<h6>Hello laphatdev</h6>');
});

app.listen(port, hostname, () => {
    console.log(`Hello Laphatdev, I'm running server at http://${hostname}:${port}/`);  // Changed 'htpps' to 'http'
});
