import express from 'express';
// import { createExpressServer } from "routing-controllers";
import { useExpressServer } from "routing-controllers";
import * as dotenv from "dotenv";

const cors = require('cors');
const bodyParser = require("body-parser"),

var path:string = '';
switch (process.env.NODE_ENV) {
  case "test":
    path = `${__dirname}/.env.test`;
    break;
  case "production":
    path = `${__dirname}/.env.production`;
    break;
  default:
    path = `${__dirname}/.env.development`;
}
dotenv.config({ path: path });

export const APP_ID = process.env.APP_ID;
export const LOG_LEVEL = process.env.LOG_LEVEL;

const app = express();
app.use(cors);

useExpressServer(app, { // register created express server in routing-controllers
    routePrefix: '/api/services/masterdata',
    controllers: [__dirname + "/controllers/*.js"]// and configure it the way you need (controllers, validation, etc.)
});

const PORT = process.env.APP_PORT || 4000;

app.listen(PORT, () => {
    console.log(`Application listeing at ${PORT}`);
});