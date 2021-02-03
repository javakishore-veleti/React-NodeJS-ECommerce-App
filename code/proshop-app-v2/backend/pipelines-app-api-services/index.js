const express = require('express');
const http = require('http');
const cors = require('cors');
const compression = require('compression');

require('dotenv').config();

const app = express();
app.use(compression);
app.use(cors);

const APP_PORT = process.env.PORT | 5000;

// https://dev.to/thedenisnikulin/express-js-on-steroids-an-oop-way-for-organizing-node-js-project-starring-typescript-388p

http.createServer({}, app).listen(APP_PORT, function() {
    console.log(`Application listening on port ${APP_PORT}`);
});


