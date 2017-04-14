const express = require('express');
const bodyParser = require('body-parser');
const accepts = require('accepts');
const os = require('os');

const app = express();
app.use(bodyParser.json());

app.get('/whoami', (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: accepts(req).languages()[0],
    operatingsystem: os.type()
  });
});

app.listen(3000);
console.log('listening to port 3000');
