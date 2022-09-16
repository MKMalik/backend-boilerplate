const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./src/Routes/routes');
const logger = require('./src/Middlewares/logger');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 5500;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(logger);

routes(app);

app.listen(PORT, (err) => {
    if (err) {
        throw console.log(err);
    }
    console.log(`Server up and running on port: ${PORT}`);

});
