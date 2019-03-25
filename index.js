const express = require('express');
const app = express();

app.get('/', (req, res, next) => res.send('Hello World from Index'))

const server = app.listen(8000, () => console.log(`Listening in port: ${server.address().port}`))