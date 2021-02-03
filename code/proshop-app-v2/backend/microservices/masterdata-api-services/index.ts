const cors = require('cors');
import express from 'express';

// https://blog.logrocket.com/typescript-with-node-js-and-express/
// https://medium.com/better-programming/node-js-vs-spring-boot-which-should-you-choose-2366c2f76587

require('dotenv').config();

const app = express();
app.use(cors)

const PORT = process.env.APP_PORT || 4000;

app.listen(PORT, () => {
    console.log(`Application listeing at ${PORT}`);
});