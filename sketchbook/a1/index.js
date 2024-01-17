const { readFile, readFileSync } = require('fs').promises

const express = require('express');
const { send } = require('process');

const app = express();

app.get('/', async (request, response) => {
    response.send(await readFile('./home.html','utf8'));
});

app.listen(process.env.PORT || 3000, () => console.log('app at http://localhost:3000'));