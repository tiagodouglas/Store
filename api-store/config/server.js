const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
db(process.env.MONGO_URI || 'mongodb://localhost/loja-roupa');

const app = express();
app.set('port', 3000);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

consign({ cwd: 'src' })
    .include('models')
    .then('api/routes')
    .into(app);

module.exports = app;