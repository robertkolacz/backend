const express = require('express');
const port = 8000;
const routes = require('./app/routes/routes');
const config = require('./app/config/config');

const app = express();
config(app);
routes(app);
app.listen(port);