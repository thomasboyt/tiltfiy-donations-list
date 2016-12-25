const express = require('express');
const axios = require('axios');
const secret = require('./secret.json');

const app = express();

app.get('/', (req, res) => {
  axios.get('https://tiltify.com/api/v2/campaign?donations=true', {
    headers: {
      'Authorization': `Token token="${secret.key}"`,
    },
  }).then((response) => {
    console.log('Refreshed');
    res.status(200).json(response.data);
  });
});

app.listen(3000);

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
});