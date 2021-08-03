// error handling in express

const express = require('express');

const app = express();

// example for GET /names/john

app.get('/name/:name',(req,res,next) => {
   if(req.params.name == 'john') {
       res.send('valid name')
   }
   else {
     const err = new Error('invalid name');
     err.status = 404;
     next(err);
   }
});

app.use(function (err, req, res, next) {
  console.log(err.stack); // e.g., Not valid name
  return res.status(err.status || 500).send("Internal Server Occurred");
});