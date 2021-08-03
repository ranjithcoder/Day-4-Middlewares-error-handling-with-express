const express = require('express');
const cors = require('cors');

// usecase of cors
const app =express();
app.use(cors({ origin: ["https://www.section.io","https://www.google.com"] }));

const ingridents = [
  {
    id: 1,
    item: "eggs",
  },
  {
    id: 2,
    item: "milk",
  },
  {
    id: 3,
    item: "butter",
  },
  {
    id: 4,
    item: "backon",
  }
]; 

app.get('/indridents',(req,res) => {
    res.send(ingridents);
}).listen(3000);