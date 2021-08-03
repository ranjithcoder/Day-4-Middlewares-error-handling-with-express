// to get body information of request we can use body-parser middle ware
// which will transform raw request body into usable format.

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// for a request like this PUT /settings/32135
// {
// "name": "Peter"
// }
// You can access the posted name like this

req.body.name // "Peter"