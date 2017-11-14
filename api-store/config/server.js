const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
require('./environment/settings');
require('dotenv').config();


const isProduction = process.env.NODE_ENV === 'production';

if(isProduction)
    db(`mongodb://${process.env.USER}:${process.env.PASS}@ds159235.mlab.com:59235/db-store`);
else
    db('mongodb://localhost/db-store');


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

consign({ cwd: 'src', verbose: false })
    .include('api/routes/pingRoute.js')
    .into(app);

module.exports = app;