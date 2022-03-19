const express = require('express');
const logger = require('morgan');
const router = require('./server/network/routes');
const cors = require('cors');
const path = require('path')
// Set up the express app
const app = express();

const PORT = process.env.PORT || 5000;

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "*"
}));

router(app);

const db = require('./server/models');

db.sequelize.sync({force:false}).then(() => {
    console.log('Create database');
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
