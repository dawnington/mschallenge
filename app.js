const express = require('express');
const path = require('path');
const pg = require('pg');
const bodyParser = require('body-parser');
const open = require('open');

const conString = 'postgres://localhost/ms_app';

const app = express();
app.set('port', (process.env.PORT || 3000))

app.use(express.static(path.join(__dirname, '/public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${app.get('port')}`);
});

app.get('/', (request, response) => {
  response.render('index');
});

app.use(bodyParser.json());

app.get('/subscriptions', (req, res, next) => {
  pg.connect(process.env.DATABASE_URL || conString, (err, client, done) => {
    if (err) {
      return next(err);
    }
    client.query('SELECT id, name, amount, date FROM subscriptions;', [], (err, result) => {
      done();

      if (err) {
        return next(err);
      }

      res.json(result.rows);
    });
  });
});

app.post('/subscriptions', (req, res, next) => {
  const subscription = req.body;

  pg.connect(process.env.DATABASE_URL || conString, (err, client, done) => {
    if (err) {
      return next(err);
    }
    client.query('INSERT INTO subscriptions (name, amount, date) VALUES ($1, $2, $3);', [subscription.name, subscription.amount, subscription.date], function (err, result) {
      done();

      if (err) {
        return next(err)
      }

      res.sendStatus(200);
    });
  });
});

open('http://localhost:3000/');
