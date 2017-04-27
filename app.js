const express = require('express');
const bodyParser = require('body-parser');
const accepts = require('accepts');
const useragent = require('express-useragent');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());

app.get('/', (req, res) => {
  res.send('type /whoami after url to get info');
});

app.get('/whoami', (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: accepts(req).languages()[0],
    operatingsystem: req.useragent.os
  });
});

app.listen(process.env.PORT || 3000, () => console.log('app running'));
