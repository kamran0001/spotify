require('dotenv').config();
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
/*
 *-----------------------Includes Routes----------------
 */

const mainRoute = require('./routes/mainRoute');

/*
 *--------------------Middleware Section-----------------
 */
const app = express();
app.use(cors());
app.enable('trust proxy');
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

/*-----------Root url-------------*/
app.get('/', async (req, res) => {
  try {
    res.status(200).json({ statusText: 'SUCCESS', statusValue: 200 });
  } catch (err) {
    console.log(err);
  }
});

app.use('/', mainRoute);

app.get('*', async (req, res) => {
  try {
    res.status(400).json({ statusText: 'FAIL', statusValue: 400, message: 'Invalid Url..' });
  } catch (err) {
    console.log(err);
  }
});

/*-----------------------------*/

/*----------------------------*/
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
