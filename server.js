// serving static files with express

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.static('public'));

// Middleware functions can execute any code, make changes to res and req objects,
// end response cycle and call next middleware.
// common example cors add below line before routes

app.use(cors());