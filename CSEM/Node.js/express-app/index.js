'use strict';
const express = require('express');
const routes = require('./routes');

const app = express();

app.use('/pokefight', routes);

app.listen(3000, () => {
    console.log('Server started at 3000 and the pokefight game started');
});