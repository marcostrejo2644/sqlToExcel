/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable import/no-dynamic-require */
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
require('dotenv').config();

// Init
const app = express();
require('./database');
require('./config/passport');

// Config
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs',
  exphbs({
    defaultLayout: 'main.hbs',
    extname: '.hbs',
  }));
app.set('view engine', 'hbs');

// Middelwares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.SECRET_CONFIG));
app.use(
  session({
    secret: process.env.SECRET_CONFIG,
    resave: true, // en cada peticion la sesion se vuelve a guardar
    saveUninitialized: true, // si inicializamos una peticion en una peticion y no se guarda nada, se guarda solo automaticamente
  }),
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(require('./routes/person'));

app.use('/panel-admin/', require(path.join(__dirname, 'routes', 'panelAdmin')));

// Public
app.use(express.static(path.join(__dirname, 'public')));

// Server on
app.listen(app.get('port'), (req, res) => {
  console.log(`sv on localhost/${app.get('port')}`);
});
